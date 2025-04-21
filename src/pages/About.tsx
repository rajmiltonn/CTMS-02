import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  GraduationCap,
  Heart,
  BookOpen,
  ShieldCheck,
  Globe,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';
import TeacherImage from '@/assets/classroom-teacher.jpg';
import SchoolBuildingImage from '@/assets/school-building.jpg';
import DiverseStudentsImage from '@/assets/diverse-students.jpg';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                About Cloud Tech Mind Solutions
              </h1>
              <Separator className="my-4" />
              <p className="text-gray-600">
                Founded in Chennai, Cloud Tech Mind Solutions (CTMS) is a leading CRM product development and IT
                 training company. With a strong focus on digital transformation, we specialize in cloud 
                 consulting, product fitment, and skill development. CTMS empowers students and professionals 
                 through real-time industry training, hands-on projects, and expert-led workshops to 
                 bridge the gap between knowledge and career success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1]">
                  <Link to="/admissions">Join Our School</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#3A59D1] text-[#3A59D1]">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={SchoolBuildingImage}
                alt="Excellence Academy campus"
                className="rounded-lg shadow-lg w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* School History Timeline */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 text-center">Our History</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Cloud Tech Mind Solutions (CTMS) is a dynamic IT consulting and training company, specializing in CRM
           cloud solutions and career transformation programs. Based in Chennai, we are committed to guiding
            students, freshers, and professionals through cutting-edge technologies like Salesforce, Data Science,
             Full Stack Development, and Digital Marketing. With a strong foundation in real-time product development
              and industry-led instruction, CTMS helps learners unlock their true potential and achieve lasting 
              career growth.
          </p>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#3A59D1] text-white shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                <span className="font-bold">1</span>
              </div>
              <div className="ml-8 md:ml-0 md:w-5/12 bg-white p-5 rounded-lg shadow">
                <div className="font-bold text-xl mb-1">2012: Foundation</div>
                <p className="text-gray-600">
                CTMS was founded with a vision to bridge the gap between academic learning and industry demands, 
                offering real-time CRM consulting and technical training.
                </p>
              </div>
            </div>

            <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#3A59D1] text-white shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                <span className="font-bold">2</span>
              </div>
              <div className="ml-8 md:ml-0 md:w-5/12 bg-white p-5 rounded-lg shadow">
                <div className="font-bold text-xl mb-1">2016: Expansion</div>
                <p className="text-gray-600">
                With growing demand from enterprises and colleges, CTMS expanded into large-scale corporate 
                training, bootcamps, and placement-focused programs across various tech domains.
                </p>
              </div>
            </div>

            <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#3A59D1] text-white shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                <span className="font-bold">3</span>
              </div>
              <div className="ml-8 md:ml-0 md:w-5/12 bg-white p-5 rounded-lg shadow">
                <div className="font-bold text-xl mb-1">2020: Innovation</div>
                <p className="text-gray-600">
                We integrated live product development, mentorship from seasoned professionals, 
                and flexible learning models to offer a truly immersive training experience.
                </p>
              </div>
            </div>

            <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#3A59D1] text-white shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                <span className="font-bold">4</span>
              </div>
              <div className="ml-8 md:ml-0 md:w-5/12 bg-white p-5 rounded-lg shadow">
                <div className="font-bold text-xl mb-1">Present: Excellence</div>
                <p className="text-gray-600">
                Today, CTMS stands as a trusted name in IT transformation—helping students, professionals, 
                and entrepreneurs achieve breakthrough success in the digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
            To deliver transformative, practical, and personalized IT training and consulting that empowers 
            learners to thrive in a digital-first world, while creating measurable impact for individuals 
            and organizations.
            </p>
          </div>

          <div className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
              To deliver transformative, practical, and personalized IT training and consulting that empowers 
            learners to thrive in a digital-first world, while creating measurable impact for individuals 
            and organizations.
              </p>
              <p className="text-gray-600">
              We believe every learner has the potential to excel. Our mission is to uncover that potential by 
              providing a supportive, skill-focused, and industry-aligned learning experience.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
                <p className="text-gray-600">
                We uphold the highest standards in IT education, ensuring our learners master both foundational 
                concepts and advanced technologies that drive industry success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Empathy & Support</h3>
                <p className="text-gray-600">
                We create a learning environment where every student is heard, supported, and guided with 
                compassion—helping them grow both professionally and personally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                We value honesty, responsibility, and ethical practices in everything we do—from teaching 
                and consulting to career guidance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Citizenship</h3>
                <p className="text-gray-600">
                We prepare learners to thrive in a connected, global tech ecosystem, empowering them to 
                contribute responsibly to the digital world.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growth Mindset</h3>
                <p className="text-gray-600">
                We inspire learners to embrace challenges, overcome limitations, and continuously upskill
                 to stay relevant in the fast-evolving tech landscape.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation-Driven Learning</h3>
                <p className="text-gray-600">
                We foster creativity and hands-on problem-solving, combining real-world projects with emerging 
                tools to ignite forward-thinking careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     

    </Layout>
  );
};

export default AboutPage;
