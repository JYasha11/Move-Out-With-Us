import React from 'react';
import Logo from '../assets/logo_blue_transparent.png';
import { ReactComponent as ReactIcon } from '../assets/icons/react-icon.svg';
import { ReactComponent as FlaskIcon } from '../assets/icons/flask-icon.svg';
import { ReactComponent as PythonIcon } from '../assets/icons/python-icon.svg';
import { ReactComponent as JSIcon } from '../assets/icons/js-icon.svg';
import Developer1 from '../assets/dev-jon.jpg';
import Developer2 from '../assets/dev-yash.jpg';
import Developer3 from '../assets/dev-abhay.jpg';
import Developer4 from '../assets/dev-adrian.jpg';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-12 text-center bg-slate-100 p-6 rounded-md shadow-lg">
                <h2 className="text-3xl font-semibold mb-4">Our Product</h2>
                <hr className="my-4 border-gray-300" />
                <img src={Logo} alt="Logo" className="h-24 mx-auto mb-4" />
                <p className="max-w-xl mx-auto">
                    Our product was born from the idea that simplicity and technology can work together
                    in harmony. Inspired by the need for user-friendly interfaces in the tech industry,
                    we strive to bring you solutions that are both innovative and intuitive.
                </p>
            </section>

            <section className="mb-12 text-center bg-slate-100 p-6 rounded-md shadow-lg">
                <h2 className="text-3xl font-semibold text-center mb-4">About The Team</h2>
                <hr className="my-4 border-gray-300" />
                <div className="flex justify-around flex-wrap">
                    <div className="text-center">
                        <img src={Developer2} alt="Developer Yash" className="rounded-full w-24 h-24 mb-2 mx-auto" />
                        <h3 className="text-lg font-medium">Yash Mutnal</h3>
                        <p className="text-sm text-gray-600">Backend Developer</p>
                    </div>
                    <div className="text-center">
                        <img src={Developer1} alt="Developer Jon" className="rounded-full w-24 h-24 mb-2 mx-auto" />
                        <h3 className="text-lg font-medium">Jonathan Yashayev</h3>
                        <p className="text-sm text-gray-600">Frontend Developer</p>
                    </div>
                    <div className="text-center">
                        <img src={Developer3} alt="Developer Abhay" className="rounded-full w-24 h-24 mb-2 mx-auto" />
                        <h3 className="text-lg font-medium">Abhay Sood</h3>
                        <p className="text-sm text-gray-600">Backend Developer</p>
                    </div>
                    <div className="text-center">
                        <img src={Developer4} alt="Developer Adrian" className="rounded-full w-24 h-24 mb-2 mx-auto" />
                        <h3 className="text-lg font-medium">Adrián Landaverde Nava</h3>
                        <p className="text-sm text-gray-600">Backend Developer</p>
                    </div>
                </div>

                <p className="text-center mt-6 max-w-2xl mx-auto">
                    Meet the team of passionate developers behind our product. With a diverse range of skills
                    and a unified goal, we're dedicated to crafting experiences that make a difference.
                </p>
            </section>

            <section className="mb-12 text-center bg-slate-50 p-6 rounded-md shadow-lg">
                <h2 className="text-3xl font-semibold mb-4">How It's Built</h2>
                <hr className="my-4 border-gray-300" />
                <div className="flex justify-center space-x-4">
                    <ReactIcon className="h-12 w-12" />
                    <FlaskIcon className="h-12 w-12" />
                    <PythonIcon className="h-12 w-12" />
                    <JSIcon className="h-12 w-12" />
                </div>
                <p className="max-w-xl mx-auto mt-4">
                    Our tech stack is a blend of cutting-edge frameworks and languages that ensure
                    performance, reliability, and scalability. From front-end to back-end, we leverage
                    the best tools available to build solutions that exceed expectations.
                </p>
            </section>
        </div>
    );
}
