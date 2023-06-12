import { Link } from "react-router-dom"
import styles from "./Description.module.scss"

function Description({ dataOfCard, setOrder }) {
    const data1 = localStorage.getItem("dataForDescription")
    const data2 = JSON.parse(data1)
    console.log(dataOfCard)

    return (
        <div className={styles.container}>
            <div className={styles.containerForClose}>
                <Link to="/" className={styles.iconLink}>
                    <i
                        className={`ri-close-circle-line close ${styles.closeIcon}`}
                    ></i>
                </Link>
            </div>

            <div className={styles.description}>
                <div className={styles.leftPart}>
                    <div className={styles.imageWrapper}>
                        <img src={data2[0]} alt="Img" />
                    </div>
                </div>

                <div className={styles.rightPart}>
                    <h2>{data2[1]}</h2>
                    <p>
                        Introducing the Puma X Aka Boku Future Cross Trainers, a
                        remarkable collaboration between Puma, a renowned
                        sportswear brand, and Aka Boku, a celebrated Japanese
                        artist known for his vibrant and imaginative designs.
                        These sneakers seamlessly blend innovative technology,
                        comfort, and artistic flair to create a truly unique and
                        eye-catching footwear experience.
                        <br />
                        <br />
                        The Puma X Aka Boku Future Cross Trainers boast a sleek
                        and modern silhouette, with a lightweight construction
                        that ensures agility and flexibility during physical
                        activities. The upper is crafted from premium materials,
                        combining breathable mesh panels with durable synthetic
                        overlays, providing a perfect balance of ventilation and
                        support for your feet.
                        <br />
                        <br />
                        These cross trainers feature Puma's state-of-the-art
                        cushioning system, utilizing responsive foam technology
                        to deliver superior comfort and shock absorption.
                        Whether you're hitting the gym, going for a run, or
                        engaging in any other high-intensity training, these
                        shoes will keep your feet energized and protected
                        throughout your workout.
                        <br />
                        <br />
                        One of the standout features of the Puma X Aka Boku
                        Future Cross Trainers is the striking design elements
                        inspired by Aka Boku's artistic vision. The shoes
                        showcase vibrant color combinations, bold patterns, and
                        intricate illustrations that capture the artist's
                        imaginative style. These artistic touches create a
                        visually captivating look that sets these sneakers apart
                        from the crowd.
                        <br />
                        <br />
                        Furthermore, the Puma X Aka Boku Future Cross Trainers
                        prioritize functionality with their secure lace-up
                        closure and padded collar, offering a snug and
                        supportive fit. The rubber outsole provides excellent
                        traction on various surfaces, ensuring stability and
                        grip when you need it most.
                        <br />
                        <br />
                        Whether you're a sneaker enthusiast, an athlete, or
                        simply someone who appreciates cutting-edge design, the
                        Puma X Aka Boku Future Cross Trainers are a must-have
                        addition to your footwear collection. Embrace the fusion
                        of art and sportswear with these extraordinary sneakers
                        and experience style and performance like never before.
                    </p>
                </div>
            </div>

            <div className={styles.buy}>
                <h2>{data2[2]}$</h2>
                <Link to="/order">
                    <button
                        onClick={() => {
                            setOrder("description")
                        }}
                    >
                        ORDER
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Description
