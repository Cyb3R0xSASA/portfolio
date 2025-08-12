import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange, MdWeb } from "react-icons/md";
import { RiTranslate } from "react-icons/ri";
import { FaXTwitter, FaGithub, FaLinkedinIn, FaServer, FaCode, FaToolbox } from "react-icons/fa6";

import imageGray from '../assets/image-gray.jpg';
import imageYellow from '../assets/image-yellow.jpg';

import aws from '../assets/aws.png';
import bash from '../assets/bash.png';
import bootstrap from '../assets/bootstrap.png';
import css from '../assets/css.png';
import django from '../assets/django.png';
import docker from '../assets/docker.png';
import express from '../assets/express.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import kali from '../assets/kali.png';
import linux from '../assets/linux.png';
import selenium from '../assets/selenium.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import netlify from '../assets/netlify.png';
import nodejs from '../assets/nodejs.png';
import npm from '../assets/npm.png';
import playwright from '../assets/playwright.png';
import postgresql from '../assets/postgresql.png';
import postman from '../assets/postman.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import redis from '../assets/redis.png';
import sqlite from '../assets/sqlite.png';
import tailwindcss from '../assets/tailwindcss.png';
import vscode from '../assets/vscode.png';



export const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

export const hero = {
    name: 'Mohmed Mostafa',
    title: 'Full Stack Developer && Web Scarper & Automation',
    description: `I'm a passionate and results-driven Full Stack Web Developer specializing in the MERN Stack (MongoDB, Express.js, React, Node.js). I build scalable, modern web applications with dynamic functionality and intuitive, responsive interfaces.`,
    imageYellow,
    imageGray,
    status: 'Available for work'
};

export const about = {
    years: '2+ Years',
    title: 'Professional Experience',
    descriptions: [
        {
            "id": 1,
            "text": "I'm a dedicated Full Stack Developer with a solid foundation in both frontend and backend technologies. My journey into software development began during my Computer Science studies, where I discovered a passion for solving real-world problems through code."
        },
        {
            "id": 2,
            "text": "Over the past few years, I've built and deployed projects ranging from web scraping bots and automation scripts to full-stack applications using the MERN stack and Django. I’m constantly expanding my skills, with a growing interest in cybersecurity and system optimization."
        },
        {
            "id": 3,
            "text": "When I’m not coding, I’m freelancing, exploring ethical hacking, or memorizing the Quran—a personal journey that fuels my discipline and purpose. I believe in writing clean, maintainable code and using technology as a tool for both impact and growth."
        }
    ],
    contacts: [
        { id: 1, Icon: MdEmail, text: 'mohmedmostafayoussef@gmail.com' },
        { id: 2, Icon: IoLocationSharp, text: 'Egypt, Al Qalyubia, Toukh' },
        { id: 3, Icon: MdOutlineDateRange, text: 'Available Jun 2025' },
        { id: 4, Icon: RiTranslate, text: 'English, Arabic' },
    ]
}

export const footer = {
    col1: {
        title: 'Mohmed Mostafa',
        cols: ['Full Stack Developer with a solid foundation in both frontend and backend technologies. Love Cyber Security and Ethical Hacking.'],
        social: [
            {
                Icon: FaLinkedinIn,
                path: 'https://www.linkedin.com/in/mohmedmostafayoussef/'
            },
            {
                Icon: FaGithub,
                path: 'https://github.com/Cyb3R0xSASA'
            },
            {
                Icon: FaXTwitter,
                path: 'https://x.com/s_a_s__a_',
            }
        ]
    },
    col2: {
        title: 'Quick Links',
        cols: [...routes],
    },
    col3: {
        title: 'Services',
        cols: [
            { id: 1, title: 'Back End Developing' },
            { id: 2, title: 'Front End Developing' },
            { id: 3, title: 'Full Stack Developing' },
            { id: 4, title: 'Web Scrapping & Automation' },
            { id: 5, title: 'Bug Hunting' },
            { id: 6, title: 'Automation Scripts Developing' },
        ]
    },
    col4: {
        title: 'Contact Me',
        cols: [...about.contacts.slice(0, -1)]
    }
};

export const skills = {
    description: `I've worked with a variety of technologies across the full stack. Here's an overview of my technical expertise and tools I use regularly.`,
    cols: [
        {
            id: 1,
            name: 'Frontend',
            Icon: MdWeb,
            skills: [
                { id: 1, name: 'HTML5 & CSS3', percent: 95 },
                { id: 2, name: 'JavaScript (ES6+)', percent: 90 },
                { id: 3, name: 'React', percent: 80 },
                { id: 4, name: 'TypeScript', percent: 60 },
                { id: 5, name: 'Tailwind CSS', percent: 95 },
            ]
        },
        {
            id: 2,
            name: 'Backend',
            Icon: FaServer,
            skills: [
                { id: 1, name: 'Node.js', percent: 90 },
                { id: 2, name: 'Express.js', percent: 95 },
                { id: 3, name: 'MongoDB', percent: 85 },
                { id: 4, name: 'PostgreSQL', percent: 80 },
                { id: 5, name: 'RESTful APIs', percent: 95 },
                { id: 6, name: 'Django', percent: 85 },
            ]
        },
        {
            id: 3,
            name: 'Tools',
            Icon: FaToolbox,
            skills: [
                { id: 1, name: 'CLI', percent: 95 },
                { id: 2, name: 'Git & GitHub', percent: 90 },
                { id: 3, name: 'Docker', percent: 80 },
                { id: 4, name: 'AWS', percent: 90 },
                { id: 5, name: 'Figma', percent: 75 },
            ]
        },
        {
            id: 4,
            name: 'Programming Language',
            Icon: FaCode,
            skills: [
                { id: 1, name: 'JavaScript', percent: 90 },
                { id: 2, name: 'Python', percent: 95 },
                { id: 3, name: 'Bash', percent: 85 },
            ]
        },
    ]
};

export const skillsIcons = [
    { id: 1, image: aws },
    { id: 2, image: bash },
    { id: 3, image: bootstrap },
    { id: 4, image: css },
    { id: 5, image: django },
    { id: 6, image: docker },
    { id: 7, image: express },
    { id: 8, image: git },
    { id: 9, image: github },
    { id: 10, image: html },
    { id: 11, image: javascript },
    { id: 12, image: kali },
    { id: 13, image: linux },
    { id: 14, image: selenium },
    { id: 15, image: mongodb },
    { id: 16, image: mysql },
    { id: 17, image: netlify },
    { id: 18, image: nodejs },
    { id: 19, image: npm },
    { id: 20, image: playwright },
    { id: 21, image: postgresql },
    { id: 22, image: postman },
    { id: 23, image: python },
    { id: 24, image: react },
    { id: 25, image: redis },
    { id: 26, image: sqlite },
    { id: 27, image: tailwindcss },
    { id: 28, image: vscode }
];
