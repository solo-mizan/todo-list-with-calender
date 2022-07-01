import React from 'react';

const Home = () => {
    
    return (
        <div>
            <input type="text" placeholder='Type here' className='input m-5 input-info input-bordered w-full max-w-xs' />
            <button className='btn btn-outline btn-info'>Add Task</button>
        </div>
    );
};

export default Home;