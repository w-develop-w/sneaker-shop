// import emailjs from "emailjs-com"
// import { Link } from "react-router-dom"
// import { useState } from "react"
// import styles from "./OrderFromDescription.module.scss"

// const sendEmail = (formData) => {
//     // serviceID - templateID - #form - publicKey
//     emailjs
//         .sendForm(
//             "service_8g5p75o",
//             "template_1163nsb",
//             "#form",
//             "qtnoXVdXRXU5Rc5en"
//         )
//         .then(
//             () => {
//                 console.log("Email sent successfully!")
//                 // Очистка полей формы
//                 formData.choice = ""
//                 formData.size = ""
//                 formData.userName = ""
//                 formData.surname = ""
//                 formData.number = ""
//                 formData.email = ""
//             },
//             (error) => {
//                 console.error("Error sending email:", error)
//                 alert("OOPS! SOMETHING HAS FAILED...")
//             }
//         )
// }

// function OrderFromDescription({
//     cardsOfCart,
//     order,
//     dataForDescription,
//     setThanks,
// }) {
//     const arrChoiceCart = cardsOfCart.map((obj) => obj.name)
//     const strChoiceCart = arrChoiceCart.join(", ")

//     const [choice, setChoice] = useState(dataForDescription[1])
//     const [size, setSize] = useState("")
//     const [userName, setUserName] = useState("")
//     const [surname, setSurname] = useState("")
//     const [number, setNumber] = useState("")
//     const [email, setEmail] = useState("")

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (!email.includes("@")) {
//             alert("Please enter a valid email address")
//             return
//         }
//         const formData = { choice, size, userName, surname, number, email }
//         sendEmail(formData)
//     }

//     const [formCompleted, setFormCompleted] = useState(false);

//     return (
//         <div className={styles.container}>
//             <h1>Ordering</h1>
//             <h2>Your choice:</h2>

//             <form id="form" onSubmit={handleSubmit}>
//                 <input
//                     readOnly
//                     type="text"
//                     name="choice"
//                     value={order === "description" ? choice : strChoiceCart}
//                     onChange={(e) => setChoice(e.target.value)}
//                     placeholder={dataForDescription[1]}
//                 />
//                 <select
//                     name="size"
//                     value={size}
//                     onChange={(e) => setSize(e.target.value)}
//                 >
//                     <option disabled value="">
//                         Size
//                     </option>
//                     <option value="35">35</option>
//                     <option value="36">36</option>
//                     <option value="37">37</option>
//                     <option value="38">38</option>
//                     <option value="39">39</option>
//                     <option value="40">40</option>
//                     <option value="41">41</option>
//                     <option value="42">42</option>
//                     <option value="43">43</option>
//                     <option value="44">44</option>
//                     <option value="45">45</option>
//                     <option value="46">46</option>
//                 </select>

//                 <input
//                     type="text"
//                     name="name"
//                     value={userName}
//                     onChange={(e) => setUserName(e.target.value) }
//                     placeholder="Name"
//                 />
//                 <input
//                     type="text"
//                     name="surname"
//                     value={surname}
//                     onChange={(e) => setSurname(e.target.value)}
//                     placeholder="Surname"
//                 />
//                 <input
//                     type="text"
//                     name="number"
//                     value={number}
//                     onChange={(e) => setNumber(e.target.value)}
//                     placeholder="Number"
//                 />
//                 <input
//                     type="text"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email"
//                 />
//                 <div>
//                     <Link to="/">
//                         <button type="submit" onClick={() => setThanks(true)}>
//                             ORDER
//                         </button>
//                     </Link>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default OrderFromDescription

// import emailjs from "emailjs-com";
// import { Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import styles from "./OrderFromDescription.module.scss";

// const sendEmail = (formData, setThanks) => {
//   emailjs
//     .sendForm(
//       "service_8g5p75o",
//       "template_1163nsb",
//       "#form",
//       "qtnoXVdXRXU5Rc5en"
//     )
//     .then(
//       () => {
//         console.log("Email sent successfully!");
//         // Очистка полей формы
//         formData.choice = "";
//         formData.size = "";
//         formData.userName = "";
//         formData.surname = "";
//         formData.number = "";
//         formData.email = "";
//         setThanks(true);
//       },
//       (error) => {
//         console.error("Error sending email:", error);
//         alert("OOPS! SOMETHING HAS FAILED...");
//       }
//     );
// };

// function OrderFromDescription({
//   cardsOfCart,
//   order,
//   dataForDescription,
//   setThanks,
// }) {
//   const arrChoiceCart = cardsOfCart.map((obj) => obj.name);
//   const strChoiceCart = arrChoiceCart.join(", ");

//   const [choice, setChoice] = useState(dataForDescription[1]);
//   const [size, setSize] = useState("");
//   const [userName, setUserName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [number, setNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [formCompleted, setFormCompleted] = useState(false);
//   const [redirectToHome, setRedirectToHome] = useState(false);

//   const checkFormCompletion = () => {
//     if (choice && size && userName && surname && number && email) {
//       setFormCompleted(true);
//     } else {
//       setFormCompleted(false);
//     }
//   };

//   useEffect(() => {
//     checkFormCompletion();
//   }, [choice, size, userName, surname, number, email]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email.includes("@")) {
//       alert("Please enter a valid email address");
//       return;
//     }
//     const formData = { choice, size, userName, surname, number, email };
//     if (formCompleted) {
//       sendEmail(formData, setThanks);
//       setRedirectToHome(true);
//     } else {
//       alert("Please fill in all the fields");
//     }
//   };

//   if (redirectToHome) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className={styles.container}>
//       <h1>Ordering</h1>
//       <h2>Your choice:</h2>

//       <form id="form" onSubmit={handleSubmit}>
//         <input
//           readOnly
//           type="text"
//           name="choice"
//           value={order === "description" ? choice : strChoiceCart}
//           onChange={(e) => setChoice(e.target.value)}
//           placeholder={dataForDescription[1]}
//         />
//         <select
//           name="size"
//           value={size}
//           onChange={(e) => setSize(e.target.value)}
//         >
//           <option disabled value="">
//             Size
//           </option>
//           <option value="35">35</option>
//           <option value="36">36</option>
//           <option value="37">37</option>
//           <option value="38">38</option>
//           <option value="39">39</option>
//           <option value="40">40</option>
//           <option value="41">41</option>
//           <option value="42">42</option>
//           <option value="43">43</option>
//           <option value="44">44</option>
//           <option value="45">45</option>
//           <option value="46">46</option>
//         </select>

//         <input
//           type="text"
//           name="name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           name="surname"
//           value={surname}
//           onChange={(e) => setSurname(e.target.value)}
//           placeholder="Surname"
//         />
//         <input
//           type="text"
//           name="number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           placeholder="Number"
//         />
//         <input
//           type="text"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <div>
//           <button type="submit" disabled={!formCompleted}>
//             ORDER
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default OrderFromDescription;

import emailjs from "emailjs-com"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import styles from "./OrderFromDescription.module.scss"

const sendEmail = (formData) => {
    // serviceID - templateID - #form - publicKey
    emailjs
        .sendForm(
            "service_8g5p75o",
            "template_1163nsb",
            "#form",
            "qtnoXVdXRXU5Rc5en"
        )
        .then(
            () => {
                console.log("Email sent successfully!")
                // Очистка полей формы
                formData.choice = ""
                formData.size = ""
                formData.userName = ""
                formData.surname = ""
                formData.number = ""
                formData.email = ""
            },
            (error) => {
                console.error("Error sending email:", error)
                alert("OOPS! SOMETHING HAS FAILED...")
            }
        )
}

function OrderFromDescription({
    cardsOfCart,
    order,
    dataForDescription,
    setThanks,
}) {
    const arrChoiceCart = cardsOfCart.map((obj) => obj.name)
    const strChoiceCart = arrChoiceCart.join(", ")

    const [choice, setChoice] = useState(dataForDescription[1])
    const [size, setSize] = useState("")
    const [userName, setUserName] = useState("")
    const [surname, setSurname] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email.includes("@")) {
            alert("Please enter a valid email address")
            return
        }
        const formData = { choice, size, userName, surname, number, email }
        sendEmail(formData)
        setThanks(true)
        navigate("/")
    }

    const areAllFieldsFilled = () => {
        return (
            choice !== "" &&
            size !== "" &&
            userName !== "" &&
            surname !== "" &&
            number !== "" &&
            email !== ""
        )
    }

    return (
        <div className={styles.container}>
            <h1>Ordering</h1>
            <h2>Your choice:</h2>

            <form id="form" onSubmit={handleSubmit}>
                <input
                    readOnly
                    type="text"
                    name="choice"
                    value={order === "description" ? choice : strChoiceCart}
                    onChange={(e) => setChoice(e.target.value)}
                    placeholder={dataForDescription[1]}
                />
                <select
                    name="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                >
                    <option
                        id="option1"
                        disabled
                        value=""
                        className={`${styles.size} ${styles.placeholder}`}
                    >
                        Size
                    </option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46
                    ">46</option>
                </select>


                <input
                    type="text"
                    name="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Name"
                />

                <input
                    type="text"
                    name="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Surname"
                />

                <input
                    type="text"
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Phone number"
                />

                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />

                <div className={styles.btnContainer}>
                    <button
                        type="submit"
                        className={styles.orderBtn}
                        disabled={!areAllFieldsFilled()}
                    >
                        ORDER
                    </button>
                </div>
            </form>
        </div>
    )
}

export default OrderFromDescription
