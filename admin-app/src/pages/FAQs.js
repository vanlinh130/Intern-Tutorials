import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const FAQs = () => {
    const [tasks, setTasks] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch('http://localhost:4000/tasks');
            const data = await res.json();
            setTasks(data);
        };
        fetchTask();
    }, []);

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch('http://localhost:4000/questions');
            const data = await res.json();
            setQuestions(data);
        };
        fetchTask();
    }, []);

    const handlerQuestion = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="p-10 max-sm:p-0">
            <div className="flex  flex-col items-center justify-center pt-5 max-sm:text-center">
                <h1 className="text-4xl font-semibold mb-5">
                    Got questions? We’re here to
                    <span className="pl-2 text-cyan-500">help</span>
                </h1>
                <p>Choose the topics below to find the answer</p>
            </div>
            <div className="pt-6 w-full flex flex-wrap">
                {tasks.map((task) => {
                    return (
                        <div key={task.id} className="faq-item m-2 p-6 bg-white rounded-3xl">
                            <img src={task.image} alt="images" />
                            <h3 className="my-3 text-xl font-semibold">{task.name}</h3>
                            <p className="text-sm mb-8 leading-2">{task.title}</p>
                            <Link>
                                <span className="text-sm font-bold">Read More</span>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="flex  flex-col items-center justify-center pt-16 max-sm:text-center">
                <h1 className="text-4xl font-semibold mb-5">Frequently asked question</h1>
                <p>Here are some common questions about Ecomdy Media.</p>
            </div>
            <div className="my-12">
                {questions.map((question) => {
                    return (
                        <div
                            key={question.id}
                            className="p-4 my-4 bg-white rounded-2xl cursor-pointer"
                            onClick={() => handlerQuestion()}
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-500">{question.title}</p>
                                {collapsed ? <FiChevronUp /> : <FiChevronDown />}
                            </div>
                            {collapsed && (
                                <div className="flex flex-col bg-slate-100 rounded-2xl mt-4 p-4">
                                    <span className="text-sm py-1">There are 3 kinds of fees:</span>
                                    <strong className="text-sm">
                                        Total fee = Service fee + Subscription fee + Tax
                                    </strong>
                                    <i className="text-sm py-1">You can see more information in the link below</i>
                                    <span className="text-sm text-cyan-500">Read more ...</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQs;
