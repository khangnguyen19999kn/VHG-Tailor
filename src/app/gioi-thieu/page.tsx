import BlurIn from "@/components/ui/blur-in";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import LetterPullup from "@/components/ui/letter-pullup";
import Image from "next/image";
import Link from "next/link";

export default function IntroductionPage() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full bigDesktop:w-1/2 desktop:w-4/5 laptop:w-4/5 flex flex-col gap-5 my-10 p-4">
        <div className="w-full flex justify-center">
          <LetterPullup
            words=" Sứ mệnh và tầm nhìn của VHG"
            delay={0.1}
            className="font-[playFair]"
          />
        </div>
        <BlurIn
          word="
          V.H.G Tailor được thành lập vào năm 2009, với sứ mệnh phục vụ trang
          phục may đo của nam giới. Chúng tôi mong muốn mang giá trị truyền
          thống vào văn hóa hiện đại để giúp người đàn ông tự tin và hình thành
          được phong cách sống !"
          duration={0.8}
        />
        <div className="w-full flex justify-center">
          <div className="w-4/5 h-[650px] relative mobile:w-full mobile:h-[300px]">
            <BoxReveal
              boxColor={"#edd8c2"}
              width="100%"
              height="100%"
              duration={0.5}
            >
              <Image src={"/herosection2.jpg"} alt="herosection2" fill />
            </BoxReveal>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <p className="text-sm text-slate-400">
              Đội ngũ nhân viên tâm huyết của V.H.G Tailor
            </p>
          </div>
        </div>
        <BlurIn
          word="V.H.G Tailor là nơi chuyên cung cấp các sản phẩm thời trang nam được
          may đo và thiết kế thủ công, đảm bảo sự tinh tế và độc đáo trong từng
          chi tiết. Chúng tôi tự hào mang đến cho khách hàng những bộ trang phục
          vừa vặn hoàn hảo, được làm từ các loại vải cao cấp, phù hợp với nhu
          cầu và phong cách cá nhân."
          duration={0.8}
        />
        <BlurIn
          word="Mỗi sản phẩm đều được tạo nên từ bàn tay tài hoa của những thợ may
          lành nghề, tôn vinh sự tinh xảo và bền bỉ trong từng đường kim mũi
          chỉ. Từ áo sơ mi, quần tây đến áo khoác, chúng tôi cam kết mang đến sự
          hài lòng cho khách hàng không chỉ ở chất lượng sản phẩm mà còn ở dịch
          vụ chăm sóc tận tâm."
          duration={0.8}
        />
        <div className="w-full flex justify-center">
          <Link href="/quy-trinh">
            <Button>Xem chi tiết quy trình may đo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
