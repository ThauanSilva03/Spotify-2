import Image from "next/image";
import Input from "../components/input";
import ButtonConfirm from "../components/ButtonConfirm";

export default function resetPassword() {
  return (
    <div className="bg-[#121212] w-screen min-h-screen flex items-center flex-col justify-between py-2">
      <div className="w-80 pt-6">
        <div className="w-full flex justify-center">
          <Image
            src="/icons/icon-spotify.svg"
            alt="iconSpotfy"
            width={45}
            height={45}
          />
        </div>
        <h1 className="text-3xl font-bold text-white pt-4">
          Redefina sua senha
        </h1>
        <p className="py-3">
          Insira o endereço de e-mail ou nome de usuário vinculado à sua conta
          do Spotify pra te enviarmos um e-mail.
        </p>
        <div className="pb-2">
          <label htmlFor="email" className="font-semibold text-sm">
            Endereço de e-mail ou nome de usuário
          </label>
        </div>
        <Input type="email" placeholder="" id="email" />
        <p className="py-4">
          <a
            href="https://support.spotify.com/br-pt/article/reset-password/"
            className="text-white hover:text-[#1ED760] underline text-sm"
          >
            Precisa de ajuda?
          </a>
        </p>
        <ButtonConfirm>Enviar link</ButtonConfirm>
      </div>
      <footer className="text-[#999999] text-xs flex justify-center items-center flex-col p-4">
        <p>This site is protected by reCAPTCHA and the Google</p>
        <p>
          <span>
            <a
              href="https://policies.google.com/privacy"
              className="underline hover:text-[#1ED760]"
            >
              Privacy Policy
            </a>
          </span>{" "}
          and{" "}
          <span>
            <a
              href="https://policies.google.com/terms"
              className="underline hover:text-[#1ED760]"
            >
              Terms of Service
            </a>
          </span>{" "}
          apply.
        </p>
      </footer>
    </div>
  );
}
