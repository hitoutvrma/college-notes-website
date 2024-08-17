import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './css/NotesPage.css';
import './css/home.css';

const NotesPage = () => {
  const [keyy, setKeyy] = useState(true);
  const toggleKey = () => {
    setKeyy(prevKeyy => !prevKeyy);
  };

  const location = useLocation();
  const [searchTerm] = useState('');
  const [chapters, setChapters] = useState([
    {
      title: 'C Language',
      subChapters: [
<div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><button className='semester-buttons'>open</button></div>,
                          <div className='subjects'><p>recursion</p><button>article</button>
                          <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
        <g>
          <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
            s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
            s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
            s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
            S453.122,146.946,442.891,110.621z"/>
          <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
        </g>
      </svg><button className='semester-buttons'>open</button></div>,
      <div className='subjects'><p>recursion</p><button>article</button>
      <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
<g>
<path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
S453.122,146.946,442.891,110.621z"/>
<polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
</g>
</svg><button className='semester-buttons'>open</button></div>,
                    
                    <div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><button className='semester-buttons'>open</button></div>,],
      isOpen: false,
    },
    
    {
      title: 'Digital Electronics',
      subChapters: [<div className='subjects'><p>Chapter name</p><p>article</p>
        <p>youtube link</p><p>Difficulty</p><button className='semester-buttons'>open</button></div>,
      <div className='subjects'><p>recursion</p><button>article</button>
        <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
<g>
<path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
S453.122,146.946,442.891,110.621z"/>
<polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
</g>
</svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
<div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
                          <div className='subjects'><p>recursion</p><button>article</button>
                          <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
        <g>
          <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
            s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
            s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
            s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
            S453.122,146.946,442.891,110.621z"/>
          <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
        </g>
      </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
      <div className='subjects'><p>recursion</p><button>article</button>
      <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
<g>
<path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
S453.122,146.946,442.891,110.621z"/>
<polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
</g>
</svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
                    
                    <div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,],
      isOpen: false,
    },
    {
      title: 'Operating System',
      subChapters: [<div className='subjects'><p>Chapter name</p><p>article</p>
        <p>youtube link</p><p>Difficulty</p><button className='semester-buttons'>open</button></div>,
      <div className='subjects'><p>recursion</p><button>article</button>
        <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
<g>
<path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
S453.122,146.946,442.891,110.621z"/>
<polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
</g>
</svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
<div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
                          <div className='subjects'><p>recursion</p><button>article</button>
                          <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
        <g>
          <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
            s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
            s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
            s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
            S453.122,146.946,442.891,110.621z"/>
          <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
        </g>
      </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
      <div className='subjects'><p>recursion</p><button>article</button>
      <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
<g>
<path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
S453.122,146.946,442.891,110.621z"/>
<polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
</g>
</svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
                    
                    <div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,],
      isOpen: false,
    },
    {
      title: 'Computer Networks',
      subChapters: [<div className='subjects'><p>Chapter name</p><p>article</p>
        <p>youtube link</p><p>Difficulty</p><button className='semester-buttons'>open</button></div>,
      <div className='subjects'><p>recursion</p><button>article</button>
        <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
<g>
<path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
S453.122,146.946,442.891,110.621z"/>
<polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
</g>
</svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
<div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
                          <div className='subjects'><p>recursion</p><button>article</button>
                          <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
        <g>
          <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
            s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
            s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
            s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
            S453.122,146.946,442.891,110.621z"/>
          <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
        </g>
      </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
      <div className='subjects'><p>recursion</p><button>article</button>
      <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
<g>
<path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
S453.122,146.946,442.891,110.621z"/>
<polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
</g>
</svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
                    
                    <div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,],
      isOpen: false,
    },
    {
      title: 'Computer Networks',
      subChapters: [<div className='subjects'><p>Chapter name</p><p>article</p>
        <p>youtube link</p><p>Difficulty</p><button className='semester-buttons'>open</button></div>,
      <div className='subjects'><p>recursion</p><button>article</button>
        <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
<g>
<path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
S453.122,146.946,442.891,110.621z"/>
<polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
</g>
</svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
<div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
                          <div className='subjects'><p>recursion</p><button>article</button>
                          <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
        <g>
          <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
            s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
            s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
            s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
            S453.122,146.946,442.891,110.621z"/>
          <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
        </g>
      </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
      <div className='subjects'><p>recursion</p><button>article</button>
      <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
<g>
<path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
S453.122,146.946,442.891,110.621z"/>
<polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
</g>
</svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
                    
                    <div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,],
      isOpen: false,
    },
    {
      title: 'MongoDB',
      subChapters: [
<div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
                          <div className='subjects'><p>recursion</p><button>article</button>
                          <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
        <g>
          <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
            s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
            s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
            s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
            S453.122,146.946,442.891,110.621z"/>
          <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
        </g>
      </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
      <div className='subjects'><p>recursion</p><button>article</button>
      <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
<g>
<path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
S453.122,146.946,442.891,110.621z"/>
<polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
</g>
</svg><p>Easy</p><button className='semester-buttons'>open</button></div>,
                    
                    <div className='subjects'><p>recursion</p><button>article</button>
                                              <svg className="youtube" version="1.1" id="Layer_1" viewBox="0 0 461.001 461.001">
                            <g>
                              <path style={{ fill: '#F61C0D' }} d="M442.891,110.621c-7.732-28.953-30.437-51.658-59.39-59.39C347.176,41.001,230.5,41.001,230.5,41.001
                                s-116.676,0-153.001,10.231c-28.953,7.732-51.658,30.437-59.39,59.39C8.879,146.946,8.879,230.501,8.879,230.501
                                s0,83.555,10.231,119.88c7.732,28.953,30.437,51.658,59.39,59.39C113.824,419.001,230.5,419.001,230.5,419.001
                                s116.676,0,153.001-10.231c28.953-7.732,51.658-30.437,59.39-59.39c10.231-36.325,10.231-119.88,10.231-119.88
                                S453.122,146.946,442.891,110.621z"/>
                              <polygon style={{ fill: '#FFFFFF' }} points="182.5,322.001 312.5,230.501 182.5,139.001 " />
                            </g>
                          </svg><p>Easy</p><button className='semester-buttons'>open</button></div>,],
      isOpen: false,
    },
  ]);

  const toggleChapter = (index) => {
    setChapters(prevChapters => 
      prevChapters.map((chapter, i) => 
        i === index ? { ...chapter, isOpen: !chapter.isOpen } : chapter
      )
    );
  };

  return (
    <>
      {location.pathname === '/IT' && (
        <div className="itmain">
          {/* <div className='headings'>
            Strivers A2Z DSA Sheet<br/>
          </div>
          This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner. The lecture quality is better than what you get in paid courses, the only thing we don’t provide is doubt support, but trust me our YouTube video comments resolve that as well, we have a wonderful community of 250K+ people who engage in all of the videos. */}
          <div className="content" id="content">
            <div className="container">
              {chapters
                .filter((chapter) =>
                  chapter.title.toLowerCase().includes(searchTerm)
                )
                .map((chapter, index) => (
                  <div className="block" key={index}>
                    <div onClick={() => toggleChapter(index)} className="title">
                      {chapter.title}
                      <button  className='semester-buttons'>
                        {chapter.isOpen ? 'Close' : 'Open'}
                      </button>
                    </div>
                    {chapter.isOpen && (
                      <div className="sub_content helo">
                        {chapter.subChapters.map((subChapter, subIndex) => (
                          <h1 key={subIndex}>{subChapter}</h1>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotesPage;
