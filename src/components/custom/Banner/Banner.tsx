import { useEffect, useState } from "react";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["web developer", "designer", "content creator"];
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
                    <span className="font-bold tracking-wider px-2 py-3 border-1">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm webcoded `}<span>{text}</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum magni culpa est, laudantium soluta eveniet, quo adipisci tenetur amet quidem, blanditiis aut dolores debitis! Maxime corrupti debitis esse magnam pariatur!</p>
                    <button onClick={() => console.log('connect')}>Let's connect</button>
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