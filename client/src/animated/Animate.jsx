import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP);

function Animate(modalMakeTodo, modalRef) {
  //   useEffect(() => {
  //     console.log(target.current.querySelector("li button"));
  //   }, []);

  useEffect(() => {
    // if (modalMakeTodo) {
    //   gsap.to(target.current, {
    //     background: "#000000",
    //   });
    // }
    // target.current.querySelector("li").addEventListener("click", () => {

    //   console.log("first");
    // });
    if (modalMakeTodo) {
      //   const animate = gsap.to(target.current.querySelector("li"), {
      //     // backgroundColor: "#C81E1E",
      //     onStart: () => console.log(target.current.querySelector("li")),
      //   });
      //   console.log(modalMakeTodo);
      //   animate.play;
      //   console.log(target);
      document.body
        .querySelector("#«r0»")
        .classList.replace("h-full", "h-screen");
      //   console.log(modalRef);
      //.querySelector("#«r0»")
      // .classList.add("scale-105");
    }
  }, [modalMakeTodo]);

  //   const modalAnimated = (target) => {
  //     useGSAP(
  //       () => {
  //         gsap.from(target.current, {
  //           background: "#EFBE",
  //         });
  //         gsap.to(target.current, {
  //           background: "#000000",
  //         });
  //       },
  //       { scope: target }
  //     );
  //   };
}

export default Animate;
