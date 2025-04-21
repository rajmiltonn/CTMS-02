import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Trophy, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';

// Import images
import HeroImage from '@/assets/school-building.jpg';
import ClassroomImage from '@/assets/classroom.jpg';
import LibraryImage from '@/assets/library.jpg';
import ScienceLabImage from '@/assets/science-lab.jpg';
import SportsFieldImage from '@/assets/sports-field.jpg';
import TeacherImage from '@/assets/classroom-teacher.jpg';
import DiverseStudentsImage from '@/assets/diverse-students.jpg';
import StudentsThumbsUpImage from '@/assets/students-thumbsup.jpg';

const HomePage = () => {
  return (
    <Layout>

      {/* Hero Section */} <section className="relative bg-white dark:bg-gray-900">
      <div className="relative h-[70vh] w-full overflow-hidden">
          <img
            src={HeroImage}
            alt="School building"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl hero-text">
  Welcome to<br />
  Cloud Tech Mind Solutions
</h1>

            <p className="mb-8 max-w-xl text-lg text-white/90 hero-text">
            Empowering minds, transforming careers, and accelerating excellence in digital education and 
            CRM innovation since inception.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#3A59D1] hover:bg-[#2A49C1] dark:bg-blue-600 dark:hover:bg-blue-700">
                <Link to="/admissions">Kickstart Your IT Career</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-[#3A59D1] hover:bg-white/10">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
     

      {/* About Us Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">About Us</h2>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
              Cloud Tech Mind Solutions (CTMS) is committed to delivering a transformative learning experience 
              that fuels professional growth, technical excellence, and future-readiness in a dynamic and 
              supportive environment.
              </p>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
              Our approach combines cutting-edge technical training with real-time project exposure and career 
              guidance, ensuring learners evolve into confident, industry-ready professionals capable of 
              driving innovation and value in today’s digital world.
              </p>
              <Button asChild variant="outline" className="gap-1 text-[#3A59D1] border-[#3A59D1] dark:text-blue-300 dark:border-blue-700">
                <Link to="/about">
                  Learn More <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2 grid gap-4 grid-cols-2">
              <img
                src={TeacherImage}
                alt="Teacher with students"
                className="rounded-lg object-cover h-60 w-full"
              />
              <img
                src={DiverseStudentsImage}
                alt="Diverse students collaborating"
                className="rounded-lg object-cover h-60 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">Technical Excellence</h2>
            <p className="text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Our training programs blend industry-relevant content with hands-on project experience to 
            inspire continuous learning and career growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden card-hover-effect dark:bg-gray-900 dark:border-gray-800">
              <div className="h-48 overflow-hidden">
                <img
                  src={ClassroomImage}
                  alt="Modern classroom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Book className="h-5 w-5 text-[#3A59D1] dark:text-blue-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white"> Career-Aligned Curriculum</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-400">
                A carefully curated curriculum that builds critical tech skills across Data Science, Salesforce, 
                Digital Marketing, and more.
                </p>
                <Link to="/academics" className="text-sm font-medium text-[#3A59D1] hover:underline inline-flex items-center gap-1 dark:text-blue-300">
                Explore Programs <ArrowRight size={14} />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-hover-effect dark:bg-gray-900 dark:border-gray-800">
              <div className="h-48 overflow-hidden">
                <img
                  src={LibraryImage}
                  alt="School library"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Trophy className="h-5 w-5 text-[#3A59D1] dark:text-blue-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Professional Success Stories</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-400">
                Our learners have achieved top-tier placements and career breakthroughs, with freshers 
                earning up to ₹15 LPA and 400% salary hikes.
                </p>
                <Link to="/academics" className="text-sm font-medium text-[#3A59D1] hover:underline inline-flex items-center gap-1 dark:text-blue-300">
                View Success Stories <ArrowRight size={14} />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-hover-effect dark:bg-gray-900 dark:border-gray-800">
              <div className="h-48 overflow-hidden">
                <img
                  src={ScienceLabImage}
                  alt="Science laboratory"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Users className="h-5 w-5 text-[#3A59D1] dark:text-blue-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Expert Mentorship</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-400">
                Our instructors are seasoned industry professionals who guide every learner with real-world 
                insights and personal mentoring.
                </p>
                <Link to="/about" className="text-sm font-medium text-[#3A59D1] hover:underline inline-flex items-center gap-1 dark:text-blue-300">
                Meet Our Experts <ArrowRight size={14} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">Modern Learning Experience</h2>
            <p className="text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Our platform delivers state-of-the-art digital learning, live project training, and tech bootcamps 
            designed for today’s IT demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-64 overflow-hidden rounded-lg group">
              <img
                src={ClassroomImage}
                alt="Modern classrooms"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold">Interactive Virtual Classrooms</h3>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-lg group">
              <img
                src={LibraryImage}
                alt="Extensive library"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold">Rich Learning Library</h3>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-lg group">
              <img
                src={ScienceLabImage}
                alt="Science laboratories"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold">Real-Time Project Labs</h3>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-lg group">
              <img
                src={SportsFieldImage}
                alt="Sports facilities"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold">Industry Tools Access</h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="gap-1 text-[#3A59D1] border-[#3A59D1] dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-950/50">
              <Link to="/facilities">
              Explore Learning Tools <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">What Our Learners Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Hear from our students, professionals, and entrepreneurs about their transformative 
            journeys with Cloud Tech Mind Solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-900">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#3A59D1] text-white flex items-center justify-center font-bold dark:bg-blue-700">AR</div>
                  <div className="ml-4">
                    <p className="font-bold dark:text-white">Ajmi R</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Entrepreneur</p>
                  </div>
                </div>
                <Separator className="dark:bg-gray-700" />
                <p className="text-gray-600 dark:text-gray-300">
                “After completing the Digital Marketing course at CTMS, I transformed my business 
                strategy and tripled my revenue in just 6 months.”
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-900">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#3A59D1] text-white flex items-center justify-center font-bold dark:bg-blue-700">AV</div>
                  <div className="ml-4">
                    <p className="font-bold dark:text-white">Avantika</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Final Year Student</p>
                  </div>
                </div>
                <Separator className="dark:bg-gray-700" />
                <p className="text-gray-600 dark:text-gray-300">
                “CTMS helped me land a dream job with 13 LPA even before graduation. The full stack training 
                gave me an edge.”
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-900">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#3A59D1] text-white flex items-center justify-center font-bold dark:bg-blue-700">SN</div>
                  <div className="ml-4">
                    <p className="font-bold dark:text-white">Shanmughanadhan</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Senior IT Professional</p>
                  </div>
                </div>
                <Separator className="dark:bg-gray-700" />
                <p className="text-gray-600 dark:text-gray-300">
                “CTMS gave my 20+ year career a second wind. The transformation roadmap was a game-changer.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3A59D1] text-white dark:bg-blue-800">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Join the CTMS Community</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Applications are open for upcoming programs. Book your free career counselling or get started today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#3A59D1] hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300">
              <Link to="/admissions">Enroll Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-[#3A59D1] hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
