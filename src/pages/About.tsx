import aboutImage from "@/assets/hero-1.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl font-bold text-center">About</h1>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Our History"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-serif text-4xl font-bold mb-6 text-center">
              Our History
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card p-8 rounded-lg shadow-card">
              <h3 className="font-serif text-3xl font-bold mb-6 text-primary">
                Our Vision
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                To become the leading furniture company in Indonesia, recognized for our
                commitment to quality, innovation, and customer satisfaction. We envision
                a future where every home is transformed into a beautiful, functional space
                that reflects the unique personality and lifestyle of its inhabitants. Our
                vision extends beyond just selling furniture; we aim to inspire and enable
                people to create spaces they truly love.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card p-8 rounded-lg shadow-card">
              <h3 className="font-serif text-3xl font-bold mb-6 text-accent">
                Our Mission
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                To provide high-quality, beautifully designed furniture that combines
                functionality with aesthetics. We are committed to using sustainable
                materials and ethical manufacturing practices. Our mission is to deliver
                exceptional customer service, from initial consultation to after-sales
                support, ensuring every customer finds the perfect furniture solutions for
                their needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
