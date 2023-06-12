import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // const allQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [q, setQ] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(1);

  const [isSelected, setIsSelected] = useState(false);
  const handleYes = () => {
    // const newQuestions = [];
    // setTimeout(() => {
    //   for (let i = 0; i < activeQuestion; i++) {
    //     const n = allQuestions[i];
    //     if (n !== undefined) {
    //       newQuestions.push(n);
    //     }
    //   }
    //   setActiveQuestion(activeQuestion + 1);
    //   setQ(newQuestions);
    // }, 1500);
    // for (let i = 0; i < activeQuestion; i++) {
    //   const n = allQuestions[i];
    //   if (n !== undefined) {
    //     newQuestions.push(n);
    //   }
    // }
    // setActiveQuestion(activeQuestion + 1);
    // setQ(newQuestions);

    console.log("click");
    const allQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const newQuestions = [];
    console.log(newQuestions);

    setTimeout(() => {
      for (let i = 0; i < activeQuestion; i++) {
        const n = allQuestions[i];
        console.log(n);
        if (n !== undefined) {
          newQuestions.push(n);
        }
      }
      setActiveQuestion(activeQuestion + 1);
      setQ(newQuestions);
    }, 1000);
  };

  const handleVoteNow = () => {
    const allQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newQuestions = [];
    if (q.length === 0) {
      setTimeout(() => {
        for (let i = 0; i < activeQuestion; i++) {
          const n = allQuestions[i];
          console.log(n);
          if (n !== undefined) {
            newQuestions.push(n);
          }
        }
        setActiveQuestion(activeQuestion + 1);
        setQ(newQuestions);
      }, 1000);
    } else {
      setQ([]);

      // setTimeout(() => {
      //   for (let i = 0; i < activeQuestion; i++) {
      //     const n = allQuestions[i];
      //     console.log(n);
      //     if (n !== undefined) {
      //       newQuestions.push(n);
      //     }
      //   }
      //   setActiveQuestion(activeQuestion + 1);
      //   setQ(newQuestions);
      // }, 1000);
    }
  };
  // const value = {
  //   handleYes,
  //   q,
  //   isSelected,
  //   setIsSelected,
  // };

  const authInfo = {
    userData,
    setUserData,
    handleYes,
    q,
    isSelected,
    setIsSelected,
    handleVoteNow,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
