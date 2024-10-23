"use client";

import { memo, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // 뷰포트 높이를 계산하고 해당 값을 사용하여 요소의 스타일을 업데이트하는 함수
    function adjustViewportHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    // 키보드가 올라올 때와 내려올 때의 뷰포트 높이를 조정하는 함수
    const adjustForKeyboard = () => {
      const initialViewportHeight = window.innerHeight;
      let keyboardHeight = 0;

      const handleFocus = () => {
        setTimeout(() => {
          const currentViewportHeight = window.innerHeight;
          keyboardHeight = initialViewportHeight - currentViewportHeight;
          if (keyboardHeight > 150) {
            // 키보드가 올라와서 높이가 줄어들었다면
            document.body.style.marginBottom = `${keyboardHeight}px`;
          } else {
            document.body.style.marginBottom = "0";
          }
        }, 50); // 약간의 지연 후에 높이를 재계산
      };

      const handleBlur = () => {
        setTimeout(() => {
          document.body.style.marginBottom = "0";
        }, 300); // 약간의 지연 후에 높이를 재계산 (지연 시간 증가)
      };

      const inputs = document.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);
      });

      return () => {
        inputs.forEach((input) => {
          input.removeEventListener("focus", handleFocus);
          input.removeEventListener("blur", handleBlur);
        });
      };
    };

    // 초기 뷰포트 높이를 계산하는 함수를 실행
    adjustViewportHeight();
    adjustForKeyboard();

    // 뷰포트 높이를 계산하는 함수를 resize와 orientationchange 이벤트에 바인딩
    window.addEventListener("resize", adjustViewportHeight);
    window.addEventListener("orientationchange", adjustViewportHeight);

    return () => {
      window.removeEventListener("resize", adjustViewportHeight);
      window.removeEventListener("orientationchange", adjustViewportHeight);
    };
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Toaster
        toastOptions={{
          success: {
            icon: null,
            duration: 3000,
            className: "success-toast",
          },
          error: {
            icon: null,
            duration: 3000,
            className: "error-toast",
          },
          custom: {
            duration: 3000,
            style: {
              width: "100%",
              backgroundColor: "#FFE96F",
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "-2%",
              textAlign: "left",
            },
          },
        }}
      />
    </>
  );
};

export default memo(Providers);
