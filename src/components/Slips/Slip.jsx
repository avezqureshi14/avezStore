import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CheckoutCard = () => {

  const [checkoutData, setCheckoutData] = useState(null);
    console.log(checkoutData)
  useEffect(() => {
    fetchCheckoutData();
  }, []);

  const fetchCheckoutData = async () => {
    try {
      const response = await fetch('http://localhost:8800/api/checkout');
      const data = await response.json();
      setCheckoutData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownloadPDF = () => {
    if (checkoutData) {
      const card = document.getElementById('checkout-card');

      html2canvas(card).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('checkout.pdf');
      });
    }
  };

  return (
    <div>
      {checkoutData && (
        <Card id="checkout-card" style={{ background: 'white' }}>
          <h2>Address</h2>
          <p>Street: {checkoutData.address.street}</p>
          <p>City: {checkoutData.address.city}</p>
          <p>State: {checkoutData.address.state}</p>
          <p>Zip Code: {checkoutData.address.zipCode}</p>
          <p>Country: {checkoutData.address.country}</p>

          <h2>Card Details</h2>
          <p>Card Number: {checkoutData.cardDetails.cardNumber}</p>
          <p>Cardholder Name: {checkoutData.cardDetails.cardholderName}</p>
          <p>Expiration Date: {checkoutData.cardDetails.expirationDate}</p>
          <p>CVV: {checkoutData.cardDetails.cvv}</p>
        </Card>
      )}

      <Button onClick={handleDownloadPDF}>Download PDF</Button>
    </div>
  );
};

export default CheckoutCard;
