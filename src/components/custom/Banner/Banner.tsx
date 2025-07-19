import { useEffect, useState } from "react";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Competitive Gamer", "Nap Enthusiast"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text]);

    return (
        <section id="home" className="mt-0 pt-[260px] pb-[100px]">
            <div className="flex items-center">
                <div>
                    <span className="font-bold tracking-wider px-2 py-3 border-1 border-white/50 bg-custom-gradient inline-block mb-4 text-[1.25rem]">Welcome to my Portfolio</span>
                    <h1 className="text-[4rem] font-bold mb-5 tracking-wider">{`Hi I'm Andrei, a `}<span>{text}</span></h1>
                    <p className="text-[#b8b8b8] leading-[1.5em] w-[96%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum magni culpa est, laudantium soluta eveniet, quo adipisci tenetur amet quidem, blanditiis aut dolores debitis! Maxime corrupti debitis esse magnam pariatur!</p>
                    <button className="text-white font-bold text-xl mt-16 tracking-wider flex items-center hover:underline underline-offset-2" onClick={() => console.log('connect')}>Let's connect</button>
                </div>
                <div>
                    {/* place image */}
                    <div className="w-10 h-10 bg-red-500" />
                </div>
            </div>
        </section>
    )
}

export default Banner;