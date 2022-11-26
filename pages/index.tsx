import type { NextPage } from 'next';
import NavBar from '../src/components/nav-bar';
import { Heading } from '@chakra-ui/react';
import Headings from '../src/components/landing-page';
import Testimonial  from '../src/components/testemonials';
import TestemonialHeading from '../src/components/testemonials-heading';
import Features from '../src/components/features';
import Models from '../src/components/models';
import ModelHeading from '../src/components/model-header';
import Footer from '../src/components/footer';
const Home: NextPage = () => {
  return (
    <>
        <NavBar />
        <Headings/>
        <Features/>
        <ModelHeading/>
        <Models/>
        <TestemonialHeading/>
        <Testimonial/>
        <Footer/>
    </>
  );
};

export default Home;
