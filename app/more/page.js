import Nav from "../../components/Nav"

export default function Page() {
    return <>
        <Nav />
        <div className="my-12 mx-12 lg:mx-48 xl:mx-96 font-mono">
            <ul className="space-y-4">
                <li className="list-disc">i'm a firm believer in that there are no shortcuts in life and that results will come naturally given enough hard work and time</li>
                <li className="list-disc">buildspace 2024 was one of the most amazing experiences i've had in my life and i walked away with learning how to 1) believe in myself 2) build something people want</li>
                <li className="list-disc">you can find my linux, tmux, nvim, and other configs
                    <a
                        href="https://github.com/raymozou/dotfiles"
                        target="_blank"
                        className="text-green hover:text-darkgreen transition duration-300 font-bold"
                    > here</a>
                </li>
                <li className="list-disc">"there are no two words in the English language more harmful that good job" (whiplash was an awesome movie)</li>
                <li className="list-disc">my best marathon time is 3:39:09 (Tokyo Marathon 2026)</li>
                <li className="list-disc">i can solve a rubik's cube in
                    <a
                        href="https://www.youtube.com/watch?v=dvskPgKX3uc"
                        target="_blank"
                        className="text-green hover:text-darkgreen transition duration-300 font-bold"
                    > under 10 seconds </a>
                    AND

                    <a
                        href="https://www.youtube.com/watch?v=Mboq_q7FjKw"
                        target="_blank"
                        className="text-green hover:text-darkgreen transition duration-300 font-bold"
                    > blindfolded</a>

                </li>
            </ul>
        </div>
    </>
}
