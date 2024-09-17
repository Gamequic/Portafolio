import './border.css'

export default function Border({ children }) {
    return (
        <div id="box" className="blurColor flex-grow rounded-xl w-full h-[200vh]">
            {children}
        </div>
    );
}