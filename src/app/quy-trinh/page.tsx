import BlurIn from "@/components/ui/blur-in";
import LetterPullup from "@/components/ui/letter-pullup";
import Image from "next/image";
export default function ProcedurePage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 desktop:w-2/3 mobile:w-full tablet:w-11/12 laptop:w-3/4  min-h-screen p-5">
        <div className="flex justify-center">
          <LetterPullup
            words="QUY TRÌNH MAY ĐO TẠI V.H.G TAILOR"
            delay={0.1}
            className="font-[playFair]"
          />
        </div>
        <div className="grid grid-cols-2 mobile:grid-cols-1">
          <div className="p-4 flex justify-center items-center">
            <Image
              src={"/tuvan.jpg"}
              width={300}
              height={300}
              className="w-full bigDesktop:w-3/5"
              alt="tuvan"
            />
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center mobile:items-start mobile:min-h-0">
            <div>
              <LetterPullup words="Bước 1: Tư vấn" delay={0.1} />
              <BlurIn
                word="Tại V.H.G Tailor, dựa theo nhu cầu sử dụng của khách hàng, chúng
                tôi sẽ tư vấn những loại vải và form dáng phù hợp, giúp bạn định
                hình và hiểu rõ về bộ Suit của mình."
                duration={0.8}
              />
            </div>
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center mobile:items-start mobile:min-h-0">
            <div>
              <LetterPullup words="Bước 2: Lấy số đo" delay={0.1} />
              <BlurIn
                word=" V.H.G Tailor sẽ lấy số đo cơ thể và kiểm tra tỉ mỉ hình dáng cơ
                thể để phù hợp với từng cá nhân. Đây là một quá trình rất quan
                trọng đối với một thợ may."
                duration={0.8}
              />
            </div>
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center relative mobile:min-h-0">
            <Image
              src={"/laysodo.jpg"}
              width={300}
              height={300}
              className="w-full bigDesktop:w-3/5"
              alt="laysodo"
            />
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center mobile:min-h-0">
            <Image
              src={"/taokhuonthu.jpg"}
              width={300}
              height={300}
              className="w-full bigDesktop:w-3/5"
              alt={"taokhuonthu"}
            />
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center mobile:min-h-0">
            <div>
              <LetterPullup
                words="Bước 3: Ra rập và tạo khuôn thử"
                delay={0.1}
              />
              <BlurIn
                word="Sau khi kiểm tra lại số đo và thực hiện các phép tính cẩn thận,
                chúng tôi bắt đầu tạo rập dựa trên thông số này. Các mẫu rập
                được tạo theo cách này được lưu giữ tối đa 3 năm. Sau khi ra rập
                các thợ may sẽ làm khuôn thử cho buổi Fitting."
                duration={0.8}
              />
            </div>
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center mobile:min-h-0">
            <div>
              <LetterPullup words="Bước 4: Fitting" delay={0.1} />
              <BlurIn
                word="Trong buổi Fitting, chúng tôi sẽ điều chỉnh hình dáng tổng thể
                của bộ Suit sao cho phù hợp với cơ thể khách hàng,2 bên sẽ làm
                việc với nhau và đưa ra các lựa chọn tối ưu nhất."
                duration={0.8}
              />
            </div>
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center mobile:min-h-0">
            <Image
              src={"/fitting.jpg"}
              width={300}
              height={300}
              alt={"taokhuonthu"}
            />
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center mobile:min-h-0">
            <Image
              src={"/hoanthien.jpg"}
              width={300}
              height={300}
              className="w-full bigDesktop:w-3/5"
              alt={"taokhuonthu"}
            />
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center mobile:min-h-0">
            <div>
              <LetterPullup words="Bước 5: Hoàn thiện" delay={0.1} />
              <BlurIn
                word=" Sau khi quá trình Fitting kết thúc, những người thợ may sẽ điều
              chỉnh sản phẩm phù hợp nhất với cơ thể khách hàng và hoàn thành
              những chi tiết đều được thực hiện bằng tay"
                duration={0.8}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
