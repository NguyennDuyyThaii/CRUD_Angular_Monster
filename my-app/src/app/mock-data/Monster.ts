import {Monster} from "src/app/models/monster";
export const monster: Array<Monster> = [
    {
        id: 1,
        name:"Cá nhám mang xếp",
        image: "https://znews-photo.zadn.vn/w1920/Uploaded/errl/2016_12_21/1_1.jpg",
        detail: "Trong số nhiều sinh vật lạ từng sa lưới của Fedortsov có cá nhám mang xếp, một loài cá mập hình dáng giống lươn có hàm răng lởm chởm, được mệnh danh là hóa thạch sống do vẫn lưu giữ nhiều đặc điểm từ thời nguyên thủy.",
        spell: [
            {
                id: 1,
                name: 'Ngủ',
              },
              {
                id: 2,
                name: 'Nuốt đồ vật',
              },
              {
                id: 3,
                name: 'Phun nọc độc',
              }
        ]
    },
    {
        id: 2,
        name:"Cá vây tia",
        image: "https://znews-photo.zadn.vn/w1920/Uploaded/errl/2016_12_21/2_1.jpg",
        detail: "Trong hình là sinh vật có bộ hàm lớn và hàng răng sắc nhọn. Một số người cho rằng mẫu vật là cá vây tia trong họ Malacosteus. Đây là loài cá miệng rộng sống dưới biển sâu.",
        spell: [
            {
                id: 3,
                name: 'Phun nọc độc',
              },
              {
                id: 4,
                name: 'Phun nước',
              },
              {
                id: 5,
                name: 'Bay',
              }   
        ]
    },
    {
        id: 3,
        name:"Cá mập ma",
        image: "https://znews-photo.zadn.vn/w1920/Uploaded/errl/2016_12_21/3.jpg",
        detail: "Fedortsov cũng chia sẻ những bức ảnh của loài cá chimaera, thường được biết đến với tên gọi cá mập ma. Mắt của loài này chỉ phát sáng khi ở dưới ánh đèn. Trong bóng tối của biển cả, cá mập ma trông giống như không có mắt.",
        spell: [
            {
                id: 5,
                name: 'Bay',
              },
              {
                id: 6,
                name: 'Tăng tốc',
              },
              {
                id: 7,
                name: 'Biến hình',
              }
        ]
    },
    {
        id: 4,
        name:"Quái vật Cam",
        image: "https://znews-photo.zadn.vn/w1920/Uploaded/errl/2016_12_21/6.jpg",
        detail: "Trong hình là một con nhện biển kỳ lạ màu cam chân dài có kích thước lớn bằng bàn tay người. Gần đây, sinh vật có hình dáng tương tự đã được phát hiện ở Bắc Cực và Nam Đại Dương, với những chiếc chân dài một cách đáng kinh ngạc (gần 25 cm).",
        spell: [
            {
                id: 6,
                name: 'Tăng tốc',
              },
              {
                id: 7,
                name: 'Biến hình',
              },
              {
                id: 8,
                name: 'Tàn hình',
              }
        ]
    }
]