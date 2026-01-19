import '@/app/styles/components/Reviews.css';

const reviews = [
  {
    text: "Absolutely fantastic service! The limousine was immaculate and our chauffeur was professional and friendly. Made our wedding day even more special.",
    author: "Sarah & Michael",
    event: "Wedding",
    rating: 5,
  },
  {
    text: "Hired Auslink for my daughter's school formal. She and her friends had an amazing time. The car was beautiful and the driver was punctual and courteous.",
    author: "Jennifer T.",
    event: "School Formal",
    rating: 5,
  },
  {
    text: "Used Auslink for our Yarra Valley winery tour. What a day! The limo was luxurious and comfortable. Highly recommend for any special occasion.",
    author: "David & Emma",
    event: "Winery Tour",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews__header">
          <p className="reviews__tagline">Testimonials</p>
          <h2 className="reviews__title">What Our Clients Say</h2>
        </div>

        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <div key={index} className="reviews__card">
              {/* Stars */}
              <div className="reviews__stars">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="reviews__star" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="reviews__text">"{review.text}"</p>

              {/* Author */}
              <div className="reviews__author">
                <div className="reviews__avatar">
                  {review.author.charAt(0)}
                </div>
                <div className="reviews__author-info">
                  <span className="reviews__author-name">{review.author}</span>
                  <span className="reviews__author-event">{review.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
