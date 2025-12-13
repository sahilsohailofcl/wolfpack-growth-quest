import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Developer",
    avatar: "A",
    rating: 5,
    quote: "Foclupus transformed my work habits. I went from constant phone-checking to 4-hour deep work sessions. The wolf progression system is addictively motivating!",
  },
  {
    name: "Sarah Mitchell",
    role: "College Student",
    avatar: "S",
    rating: 5,
    quote: "Finally an app that understands dopamine addiction! The detox lessons are science-backed and the gamification makes it fun. Reached Alpha rank in 3 months!",
  },
  {
    name: "Marcus Johnson",
    role: "Entrepreneur",
    avatar: "M",
    rating: 5,
    quote: "My screen time dropped from 8 hours to 3. The daily challenges keep me accountable and the mindfulness tools help me stay centered. Worth every penny!",
  },
  {
    name: "Emily Park",
    role: "Designer",
    avatar: "E",
    rating: 5,
    quote: "The wolf ranks are genius! I love competing with myself to level up. It's like Duolingo but for productivity. My focus has never been better.",
  },
  {
    name: "David Rodriguez",
    role: "Teacher",
    avatar: "D",
    rating: 5,
    quote: "I recommend Foclupus to all my students. The habit tracker and streak system create real behavioral change. Beautiful design too!",
  },
  {
    name: "Lisa Thompson",
    role: "Freelancer",
    avatar: "L",
    rating: 5,
    quote: "From Cub to Guardian in 6 weeks! The progress tracking is incredibly motivating. I've saved 50+ hours this month alone.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-cream to-cream-light overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            ⭐ Loved by Focused Wolves
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Pack Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of wolves who have transformed their focus and conquered digital distractions
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
        >
          {[
            { value: "50,000+", label: "Active Wolves" },
            { value: "4.9/5", label: "App Store Rating" },
            { value: "2M+", label: "Focus Hours Completed" },
            { value: "98%", label: "Would Recommend" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
