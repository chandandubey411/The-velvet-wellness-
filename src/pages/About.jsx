export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-primary-600 bg-primary-100 rounded-full">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-dark-900">
            The Velvet Wellness
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Where luxury wellness, comfort, and deep relaxation come together.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-bold text-dark-900 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              The Velvet Wellness is a premium spa and wellness destination
              designed for those who seek relaxation, balance, and luxury.
              Our serene space offers a calm and elegant environment where you
              can unwind and reconnect with your inner peace.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              We specialize in professional massage therapies and exclusive spa
              treatments delivered by highly trained therapists. Using
              high-quality oils and refined techniques, each session is
              customized to provide maximum comfort and rejuvenation.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you are looking to relieve stress, refresh your body, or
              indulge in a luxury wellness experience, The Velvet Wellness is
              your perfect destination for relaxation and renewal.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="bg-secondary-50 rounded-2xl p-8 shadow">
            <ul className="space-y-6">
              <li>
                <h3 className="font-bold text-dark-900">
                  🌿 Luxury Wellness Experience
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Carefully curated therapies in a peaceful, hygienic, and
                  elegant environment.
                </p>
              </li>

              <li>
                <h3 className="font-bold text-dark-900">
                  💆‍♀️ Expert Therapists
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Skilled professionals with deep expertise in massage and
                  wellness therapies.
                </p>
              </li>

              <li>
                <h3 className="font-bold text-dark-900">
                  ✨ Relax, Restore & Rejuvenate
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  A perfect blend of luxury, comfort, and personalized care.
                </p>
              </li>

              <li>
                <h3 className="font-bold text-dark-900">
                  📍 Prime Location – Greater Noida
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Located at Rise Madison Square, Sector 1, Bisrakh Jalalpur,
                  Greater Noida for easy access and convenience.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
