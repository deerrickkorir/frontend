import React from 'react';
import Container from 'react-bootstrap/Container';

const AboutPage = () => {
  return (
    <Container className="py-5">
      <h1>Welcome to CarCare Connect</h1>
      <p>
        At CarCare Connect, we are passionate about providing high-quality car parts to keep your vehicle running smoothly. We understand that finding the right parts can be overwhelming, so we strive to make the process easy and affordable.
      </p>
      <h2>Our Story</h2>
      <p>
        {/* Briefly describe your company's origin and passion for car parts */}
        Founded in [Year], CarCare Connect was born from a love for cars and a desire to help people maintain their vehicles. We started as a small physical shop and have grown to become a trusted source for car parts in the area.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to be your one-stop shop for all your car part needs. We offer a wide selection of parts for various car makes and models, ensuring you find the perfect fit for your vehicle. We are committed to:
      </p>
      <ul>
        <li>
          Extensive Parts Selection: We carry a comprehensive inventory of new, used, and aftermarket parts, allowing you to find the right part at the right price.
        </li>
        <li>
          Competitive Prices: We believe in fair and transparent pricing. You'll find competitive prices on all our parts, with no hidden fees or surprises.
        </li>
        <li>
          Expert Assistance: Our knowledgeable staff is here to help. Whether you're unsure about the specific part you need or require advice on repairs, our team is happy to assist you.
        </li>
        <li>
          Convenient Ordering: Order parts online for quick delivery or visit our store to browse our selection in person. We offer convenient pickup and delivery options to suit your needs.
        </li>
      </ul>
      <h2>Why Choose Us?</h2>
      <p>
        Here's what sets us apart:
      </p>
      <ul>
        <li>
          High-Quality Parts: We source our parts from reputable suppliers to ensure you receive reliable and durable components.
        </li>
        <li>
          Fast and Reliable Delivery: We offer fast and reliable delivery options to get the parts you need quickly.
        </li>
        <li>
          Commitment to Customer Satisfaction: Your satisfaction is our top priority. We are dedicated to providing exceptional customer service and ensuring you have a positive experience.
        </li>
      </ul>
      <h2>Visit Us Today or Browse Our Catalog</h2>
      <p>
        Ready to keep your car running smoothly? Visit our store at junction mall or browse our extensive catalog online to find the parts you need. We're here to help!
      </p>
      

<h2>Our Services</h2>
<p>
  In addition to offering a wide selection of car parts, we provide a range of services to assist you:
</p>
<ul>
  <li>
    Compatibility Checks: Unsure if a part fits your vehicle? Our knowledgeable staff can help you verify compatibility to ensure you get the right component.
  </li>
  <li>
    Installation Services (for select parts): We offer professional installation services for complex parts, performed by our experienced technicians. (Optional: Specify types of parts)
  </li>
  <li>
    Returns and Exchanges: We understand that mistakes can happen. We offer a hassle-free return or exchange policy on most parts within a specific timeframe (mention your policy details).
  </li>
</ul>

<h2>Meet the Team</h2>
<p>
  Our team is comprised of passionate car enthusiasts with extensive knowledge and experience in the automotive parts industry. They are dedicated to helping you find the right parts and providing expert advice to keep your vehicle running smoothly.
  {/* Add team member details here */}
</p>

... (existing code) ...

<h2>Customer Testimonials</h2>
<p>
  Here's what some of our satisfied customers have to say:
</p>
<blockquote>
  "I was having trouble finding the right brake pads for my car. The staff at [Your Company Name] was incredibly helpful and knowledgeable. They not only helped me find the perfect parts but also explained the installation process clearly. Thanks to their expertise, I was able to fix my brakes myself!" - John Smith
</blockquote>
<blockquote>
  "I highly recommend [Your Company Name] for all your car part needs. They have a great selection of parts at competitive prices, and their customer service is top-notch. They were patient with my questions and helped me find everything I needed." - Jane Doe
</blockquote>



      {/* Consider adding social media links here */}
    </Container>
  );
};

export default AboutPage;
