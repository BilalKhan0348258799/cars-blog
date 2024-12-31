'use client'; // Required for client-side rendering

import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const Post = () => {
  const { slug } = useParams();

  // State to manage comments
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState('');

  let content = '';
  if (slug === 'revo') {
    content = 'The Toyota Revo has established itself as a favorite among pickup truck enthusiasts, especially in markets like Pakistan and Southeast Asia. Combining rugged performance with practical features and modern styling, the Toyota Revo is the perfect blend of durability and comfort. Whether you are using it for work, adventure, or daily commuting, the Revo offers a driving experience that’s tough on the outside and comfortable on the inside.The Toyota Revo is powered by a robust engine that’s designed to handle demanding tasks with ease. The current models of the Revo come with a 2.4L 4-cylinder turbocharged diesel engine (in some variants), which provides an excellent balance of power and fuel efficiency. This engine is capable of delivering 148 horsepower and 400 Nm of torque, making it well-suited for both city driving and heavy-duty tasks, such as towing and off-roading.The manual and automatic transmission options give drivers more flexibility in terms of control and ease of driving. For those who enjoy a hands-on experience, the manual transmission variant is an ideal choice, while the automatic variant offers smooth shifts and a more relaxed driving experience.One of the most attractive features of the Toyota Revo is its fuel efficiency, which is quite impressive for a vehicle of its size. With an average fuel consumption of about 10-12 km per liter (depending on driving conditions and the variant), the Revo strikes a great balance between power and efficiency. This makes it an excellent choice for long-distance travel or those who need a reliable vehicle for both work and leisure.The Toyota Revo is built to handle tough terrains and challenging conditions. Its exterior design reflects this toughness, with a bold front grille, sleek lines, and a muscular stance. The LED headlights and fog lamps not only enhance visibility but also add to the truck’s modern appearance.The Toyota Revo is more than just a utility vehicle—it’s a versatile and reliable partner for anyone in need of a vehicle that offers both workhorse capabilities and a comfortable ride. Its combination of rugged performance, excellent fuel efficiency, advanced safety features, and a spacious interior makes it an excellent choice for anyone looking for a reliable pickup truck.Whether you are using it for personal transport or as a work vehicle, the Toyota Revo delivers the power, comfort, and durability you need to tackle a variety of challenges. With its advanced features and off-road capabilities, the Toyota Revo stands as one of the top choices in its segment.';
  } else if (slug === 'corolla') {
    content = 'The Toyota Corolla has long been one of the most recognized and trusted names in the automotive industry. Known for its reliability, fuel efficiency, and practicality, the Corolla has been a favorite among car buyers for decades. Whether you are looking for a first car, a family vehicle, or a reliable commuter, the Toyota Corolla offers an exceptional driving experience that combines comfort, style, and performance. In this blog, we’ll dive deep into the specifications, features, and why the Corolla continues to be a top choice for many.The Toyota Corolla is renowned for offering a reliable and smooth driving experience. It’s powered by a range of 1.6L to 2.0L 4-cylinder engines depending on the market and model variant. The engine delivers a solid performance while maintaining excellent fuel economy. The Toyota Corolla comes with both manual and automatic transmission options (depending on the region), and the CVT (Continuously Variable Transmission) offers a more efficient and smoother driving experience, especially during long drives or city commutes.One of the main reasons why the Toyota Corolla has been so popular over the years is its remarkable fuel efficiency. With an average fuel consumption of around 13-15 km per liter (depending on the engine and driving conditions), the Corolla is an economical choice for both city driving and highway cruising.This impressive fuel efficiency, combined with a large fuel tank, makes the Toyota Corolla an ideal option for long trips, reducing the number of stops for refueling while keeping operating costs low.Inside the Toyota Corolla, you will find a cabin designed with both comfort and practicality in mind. The seats are well-padded and provide ample support, even on long drives.The interior is designed with high-quality materials, and its clean, simple layout ensures an easy and enjoyable driving experience. The seats, steering wheel, and other touchpoints are designed to provide both comfort and durability.The Toyota Corolla’s exterior design has evolved over the years, moving from a simple, functional look to a more modern, sleek design. The current generation features a more aggressive front grille, sharp lines, and a bold stance.The Toyota Corolla’s design is not only about aesthetics; it’s also about improving driving performance. Its aerodynamic body reduces drag, which helps with fuel efficiency and handling.The Toyota Corolla continues to be a leader in the compact sedan segment, thanks to its winning combination of reliability, fuel efficiency, advanced safety features, and modern design. Whether you are looking for a practical daily driver, a family car, or a vehicle that offers excellent resale value, the Corolla is an excellent choice.With its solid performance, comfortable interior, and advanced technology, the Toyota Corolla remains a top contender in the automotive world. Its long history and reputation for reliability ensure that it will continue to be a favorite among car buyers for many years to come.';
  } else if (slug === 'sonata') {
    content = 'The Hyundai Sonata is a midsize sedan that combines stylish design, advanced technology, and a comfortable ride, making it a popular choice for those who seek a balance of performance and luxury. Over the years, the Sonata has evolved into a modern and sophisticated vehicle, offering features that rival more expensive cars while maintaining affordability. With its sleek exterior lines, bold front grille, and refined profile, the Sonata immediately captures attention, but it’s what’s under the hood that makes it truly impressive.The Sonata offers a variety of engine options, including a highly efficient 2.5-liter 4-cylinder engine and a more powerful 1.6-liter turbocharged engine, delivering a perfect blend of performance and fuel economy. The car suspension system provides a smooth and comfortable ride, whether youa are navigating city streets or cruising on the highway. It’s equipped with advanced technologies such as a 8-speed automatic transmission and Dynamic Torque Control, which ensure seamless gear shifts and smooth acceleration. Additionally, the hybrid version of the Sonata offers remarkable fuel efficiency, making it a great option for those who prioritize eco-friendliness without sacrificing performance.Inside, the Sonata is a testament to Hyundai commitment to providing a premium experience at an affordable price. The cabin is spacious and features high-quality materials that give it a luxurious feel. With ample legroom for both front and rear passengers, it offers a comfortable ride for long trips or daily commutes. The interior is equipped with cutting-edge technology, including a 10.25-inch touchscreen with Apple CarPlay and Android Auto compatibility, allowing for easy smartphone integration and access to navigation, music, and apps. The Sonata’s 12-speaker Harman Kardon sound system delivers exceptional audio quality, enhancing the overall driving experience.Safety is a top priority in the Hyundai Sonata, which comes equipped with a suite of standard safety features like Forward Collision-Avoidance Assist, Lane Keep Assist, and Blind Spot Collision Avoidance, all designed to provide peace of mind and prevent accidents. These features work seamlessly together to make driving safer and more convenient. The Sonata has also earned high marks in crash tests, further solidifying its reputation as a safe and reliable vehicle.With its sleek design, advanced safety features, and impressive performance, the Hyundai Sonata stands out as a top choice in the midsize sedan segment. It combines the best of both worlds—affordable luxury and everyday practicality—making it a great option for anyone looking for a vehicle that offers both style and substance. Whether you are a daily commuter, a family driver, or someone who simply enjoys the thrill of driving, the Sonata is a car that promises to exceed expectations.';
  } else if (slug === 'cultus') {
    content = 'The Suzuki Cultus is a compact car that has captured the hearts of many drivers due to its affordability, practicality, and impressive fuel efficiency. Known for its simple yet functional design, the Cultus has been a popular choice for those looking for an everyday vehicle that offers great value for money without compromising on essential features. Whether navigating through city traffic or embarking on a weekend trip, the Cultus is a reliable companion for various driving needs.One of the standout features of the Suzuki Cultus is its exceptional fuel economy, which makes it an ideal choice for those looking to save on fuel costs. The car is powered by a 1.0-liter, 3-cylinder engine, which, although small in size, provides adequate power for daily commuting. Its lightweight design and efficient engine allow the Cultus to achieve impressive fuel efficiency, making it one of the most economical vehicles in its class. This feature has made it especially popular in markets where fuel costs are a major concern for drivers.The Cultus is not just about fuel efficiency; it also delivers a smooth and comfortable ride. Despite its compact size, the car offers ample interior space, allowing passengers to sit comfortably without feeling cramped. The cabin is designed with simplicity in mind, featuring durable materials that are easy to maintain and clean. The straightforward dashboard layout, with easy-to-read dials and a user-friendly infotainment system, ensures that the driver can focus on the road without unnecessary distractions. Additionally, the Cultus comes with features like air conditioning, power steering, and a basic sound system, which contribute to a comfortable driving experience.In terms of safety, the Suzuki Cultus includes standard features like airbags, ABS (Anti-lock Braking System), and seatbelt reminders, ensuring that occupants are protected in the event of a collision. While it may not offer the high-end safety technologies found in more expensive vehicles, the Cultus provides peace of mind with its solid build and reliable braking system. Its compact size and excellent maneuverability also make it an ideal car for city driving, where tight spaces and heavy traffic are common.The Cultus is designed to be a low-maintenance vehicle, making it an attractive option for first-time car buyers or those looking for an affordable car that won’t break the bank in terms of upkeep. Its simple engineering and widespread availability of parts make it easy and cost-effective to maintain. The car is also known for its reliability, with many owners reporting that their Cultus continues to run smoothly for years with minimal issues.Overall, the Suzuki Cultus is a practical, affordable, and reliable compact car that excels in urban environments. While it may not have the flashy features or powerful engines of higher-end vehicles, it more than makes up for it with its fuel efficiency, ease of maintenance, and overall value. Whether you are a student, a first-time buyer, or someone who simply needs a dependable car for daily use, the Cultus remains an excellent choice for those seeking a budget-friendly and functional vehicle.';
  } else if (slug === 'prado') {
    content = 'The Toyota Prado is a luxury SUV that stands out for its blend of rugged off-road capabilities, refined design, and comfort. Built to tackle both challenging terrains and urban roads, the Prado is an ideal choice for those who seek adventure without sacrificing luxury. With a history of being one of Toyota’s most popular models in the Land Cruiser series, the Prado has earned a reputation for reliability, power, and versatility. Whether you’re driving through the city, heading off-road, or embarking on a long road trip, the Toyota Prado is ready to take on any challenge with ease.At the heart of the Toyota Prado is a powerful engine lineup that offers a variety of performance options to suit different driving needs. The Prado is typically equipped with a 2.8-liter turbocharged diesel engine or a 4.0-liter V6 petrol engine, both of which provide ample power and torque for tackling tough terrains and long-distance drives. The 2.8-liter diesel engine, in particular, is favored for its excellent fuel efficiency and impressive towing capacity, making it ideal for heavy-duty tasks like hauling trailers or off-roading. The Prado advanced 4WD system, coupled with a rugged suspension, ensures exceptional off-road performance, allowing drivers to conquer dirt roads, rocky paths, and even river crossings with confidence.Inside the Prado, luxury and comfort are paramount. The cabin is spacious, offering seating for up to seven passengers, making it an ideal choice for families or groups. Premium materials are used throughout the interior, with high-quality leather upholstery, wood paneling, and soft-touch finishes creating a sophisticated and refined atmosphere. The seats are designed for long journeys, providing excellent support and comfort, while the third-row seats can be folded down to expand the cargo space when needed. The Prado is also equipped with advanced infotainment features, including a touchscreen display, Apple CarPlay, Android Auto, and a premium sound system, ensuring that both driver and passengers stay connected and entertained throughout their journey.Safety is a top priority in the Toyota Prado, and it comes equipped with a range of advanced safety technologies to keep all occupants protected. These include features like the Toyota Safety Sense suite, which offers Pre-Collision System, Lane Departure Alert, Adaptive Cruise Control, and more. In addition, the Prado is equipped with a robust body structure and a range of airbags, ensuring that it performs well in crash tests. The combination of these safety features makes the Prado a reliable vehicle for both urban and off-road adventures, providing peace of mind for the driver and passengers.The Prado’s towing capabilities are another highlight. With a towing capacity of up to 3,000 kg (6,600 lbs), it’s more than capable of handling boats, trailers, and other heavy loads, making it a versatile choice for those who enjoy outdoor activities or need a vehicle that can handle demanding tasks. Whether it’s towing a caravan on a road trip or hauling equipment for work, the Prado’s towing performance is unmatched in its class.Overall, the Toyota Prado is a luxurious yet rugged SUV that offers the best of both worlds. It combines Toyotas legendary reliability with advanced off-road capabilities and premium features, making it the perfect choice for those who need a vehicle that can handle any terrain while offering the comforts of a high-end SUV. Whether you are exploring the great outdoors, navigating city streets, or towing heavy loads, the Prado proves itself as a versatile and dependable companion, offering a driving experience that is both exhilarating and comfortable.';
  } else {
    content = 'Post not found';
  }

  // Add comment handler
  const addComment = () => {
    if (commentInput.trim() === '') return; // Prevent empty comments
    setComments((prev) => [...prev, commentInput]);
    setCommentInput(''); // Clear input after adding
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl mb-4">
        {slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Loading...'}
      </h1>
      <p>{content}</p>

      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-2xl mb-4">Comments</h2>

        {/* Display comments */}
        <ul className="mb-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <li key={index} className="border-b border-gray-300 pb-2 mb-2">
                {comment}
              </li>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </ul>

        {/* Add comment form */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Write a comment..."
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          <button
            onClick={addComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

