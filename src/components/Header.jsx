import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

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
        <div className="flex justify-between items-center p-3 border-b-black border-b">
            <Link to='/' className="flex-shrink-0 text-xl font-bold">Youtube</Link>
            <form className="flex-grow text-center" onSubmit={handleSubmit}>
                <input type='text' className="border border-black mx-auto" value={value} onChange={handleChange}/>
                <button>검색</button>
            </form>
        </div>
    )
}
