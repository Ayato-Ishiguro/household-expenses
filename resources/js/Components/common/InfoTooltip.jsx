import { useState, useRef } from "react";
import { FaInfoCircle } from "react-icons/fa";

export default function InfoTooltip({ message }) {
    const [show, setShow] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const iconRef = useRef(null);

    const handleShow = () => {
        if (iconRef.current) {
            const rect = iconRef.current.getBoundingClientRect();
            setPos({ x: rect.right + 8, y: rect.top });
        }
        setShow(true);
    };

    return (
        <>
            <span
                ref={iconRef}
                className="ml-2 text-blue-500 cursor-pointer inline-block align-middle"
                onMouseEnter={handleShow}
                onMouseLeave={() => setShow(false)}
                tabIndex={0}
                onFocus={handleShow}
                onBlur={() => setShow(false)}
                aria-label="info"
            >
                <FaInfoCircle />
            </span>
            {show && (
                <span
                    className="fixed z-50 max-w-xs rounded bg-gray-800 px-3 py-2 text-xs text-white shadow-lg break-words"
                    style={{
                        left: `${pos.x}px`,
                        top: `${pos.y}px`,
                        pointerEvents: "none",
                    }}
                >
                    {message}
                </span>
            )}
        </>
    );
}
