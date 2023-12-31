import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {BsSearch, BsYoutube} from "react-icons/bs"

export function Header() {
    const {keyword} = useParams();
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${value}`);
    };
    useEffect(() => (
        setValue(keyword || '')
    ), [keyword])

    return (
        <div className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
            <Link to='/' className='flex items-center'>
                <BsYoutube className='text-4xl text-brand'/>
                <h1 className='font-bold ml-2 text-3xl'>SonTube</h1>
            </Link>
            <form
                className='w-full flex justify-center'
                onSubmit={handleSubmit}>
                <input
                    className='w-7/12 p-2 outline-none bg-black text-gray-50'
                    type='text'
                    value={value}
                    onChange={handleChange}
                    placeholder='Search...'/>
                <button className=''><BsSearch/></button>
            </form>
        </div>
    )
}
