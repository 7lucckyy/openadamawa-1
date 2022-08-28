/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect, useState} from 'react'
import { MdMenu } from 'react-icons/md';
import { useNavigate } from "react-router-dom";



export default function Dropdown() {
    const navigate = useNavigate();
    const [dropdown, setDropdown] = useState(false);

	let ref = React.useRef();

	useEffect(() => {
		const handler = (event) => {
			if ( dropdown && ref.current !== (event.target)) {
				setDropdown(false);
			}
		};
		document.addEventListener("mouseup", handler);
		// document.addEventListener("touchend", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mouseup", handler);
			document.removeEventListener("touchend", handler);
		};
	}, [dropdown]);

	const onMouseEnter = () => {
		window.innerWidth > 960 && setDropdown(true);
	};

	const onMouseLeave = () => {
		window.innerWidth > 960 && setDropdown(false);
	};
    return(
        <>
            <MdMenu size={25} ref={ref} onMouseLeave={onMouseLeave} onClick={() => setDropdown((prev) => !prev)} className="" />

            {/* <!-- Dropdown menu --> */}
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} id="dropdownInformation" style={{'z-index': '10'}}
                className={`position-absolute mt-48 ${dropdown ? "" : "d-none"} rounded shadow text-nowrap`}>
                <div className="px-4 py-1 bg-white">
                    <p>View in full screen</p>
                    <p>Print Chart</p>
                </div>
            </div>
        </>
    )
}