import Image from "next/image";
export default function ProcedurePage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 desktop:w-2/3 mobile:w-full tablet:w-4/5 laptop:w-3/4  min-h-screen p-5">
        <p className="text-3xl bold font-[playFair] text-center">
          QUY TRÌNH MAY ĐO TẠI V.H.G TAILOR
        </p>
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
              <p className="text-2xl font-semibold">Bước 1: Tư vấn</p>
              <p>
                V.H.G Tailor được thành lập vào năm 2009, với sứ mệnh phục vụ
                trang phục may đo của nam giới. Chúng tôi mong muốn mang giá trị
                truyền thống vào văn hóa hiện đại để giúp người đàn ông tự tin
                và hình thành được phong cách sống !
              </p>
            </div>
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center mobile:items-start mobile:min-h-0">
            <div>
              <p className="text-2xl font-semibold">Bước 2: Lấy số đo</p>
              <p>
                V.H.G Tailor sẽ lấy số đo cơ thể và kiểm tra tỉ mỉ hình dáng cơ
                thể để phù hợp với từng cá nhân. Đây là một quá trình rất quan
                trọng đối với một thợ may.
              </p>
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
              <p className="text-2xl font-semibold">
                Bước 3: Ra rập và tạo khuôn thử
              </p>
              <p>
                Sau khi kiểm tra lại số đo và thực hiện các phép tính cẩn thận,
                chúng tôi bắt đầu tạo rập dựa trên thông số này. Các mẫu rập
                được tạo theo cách này được lưu giữ tối đa 3 năm. Sau khi ra rập
                các thợ may sẽ làm khuôn thử cho buổi Fitting.
              </p>
            </div>
          </div>
          <div className="p-4 min-h-96 flex justify-center items-center mobile:min-h-0">
            <div>
              <p className="text-2xl font-semibold">Bước 4: Fitting</p>
              <p>
                Trong buổi Fitting, chúng tôi sẽ điều chỉnh hình dáng tổng thể
                của bộ Suit sao cho phù hợp với cơ thể khách hàng,2 bên sẽ làm
                việc với nhau và đưa ra các lựa chọn tối ưu nhất.
              </p>
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
              <p className="text-2xl font-semibold">Bước 5: Hoàn thiện</p>
              <p>
                Sau khi quá trình Fitting kết thúc, những người thợ may sẽ điều
                chỉnh sản phẩm phù hợp nhất với cơ thể khách hàng và hoàn thành
                những chi tiết đều được thực hiện bằng tay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
