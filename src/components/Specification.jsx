import { Card } from 'antd';

const specifications = [
  { label: 'Dimensions', value: '10cm x 15cm x 2cm' },
  { label: 'Weight', value: '200g' },
  { label: 'Material', value: 'Stainless Steel' },
  { label: 'Color', value: 'Silver' },
  { label: 'Warranty', value: '1 year' },
  { label: 'Package Includes', value: '1x Stainless Steel Bottle Opener, 1x User Manual' },
];

const SpecificationsCard = () => (
  <Card title="Specifications" style={{ marginBottom: 16 }}>
    {specifications.map((spec, index) => (
      <Card.Grid key={index} hoverable={false} style={{ width: '50%' }}>
        <strong>{spec.label}</strong>
        <p>{spec.value}</p>
      </Card.Grid>
    ))}
  </Card>
);

export default SpecificationsCard;
