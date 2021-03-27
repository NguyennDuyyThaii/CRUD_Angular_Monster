import {Monster} from "src/app/models/monster";
export const monster: Array<Monster> = [
    {
        id: 1,
        name:"Cá nhám mang xếp",
        image: "https://znews-photo.zadn.vn/w1920/Uploaded/errl/2016_12_21/1_1.jpg",
        detail: "Trong số nhiều sinh vật lạ từng sa lưới của Fedortsov có cá nhám mang xếp, một loài cá mập hình dáng giống lươn có hàm răng lởm chởm, được mệnh danh là hóa thạch sống do vẫn lưu giữ nhiều đặc điểm từ thời nguyên thủy.",
        spell: [
            {
                id:7,
                name: "Quái Vật Ba Đầu"
            },
            {
                id:8,
                name: "Quái Vật Hai Đầu"
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
                id:5,
                name: "Quái Vật Mèo"
            },
            {
                id:6,
                name: "Quái Vật Chuột"
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
                id:1,
                name: "Quái Vật Béo"
            },
            {
                id:2,
                name: "Quái Vật Gầy"
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
                id:3,
                name: "Quái Vật Thẩm Mỹ"
            },
            {
                id:4,
                name: "Quái Vật Làm Mũi"
            }
        ]
    }
]