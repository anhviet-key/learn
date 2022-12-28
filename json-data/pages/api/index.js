// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from 'nextjs-cors';
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  res.status(200).json({
    products: [
      {
        id: 'a92ff2d6-2377-441d-b75e-fff730633482',
        title: 'Masteri West Heights',
        address: 'Nam Từ Liêm, Hà Nội',
        city: 'hanoi',
        area: '40',
        price: {
          from: '1.67',
          to: '7.2',
        },
        avatar: 'assets/1629738591-masteri-west-heights.png',
        images: [
          'assets/1629738591-masteri-west-heights (1).png',
          'assets/1629738595-z2489929341672c26e74079a856650db74a55df1be3b68.png',
        ],
        type: {
          name: 'Chung cư',
          value: 'chungcu',
        },
        description:
          'Dự án Masteri West Heights toạ lạc tại vị trí “vàng” đẹp nhất trong quần thể đại đô thị Vinhomes Smart City, thuộc phường Tây Mỗ và Đại Mỗ, quận Nam Từ Liêm, Hà Nội. Nhà mẫu dự án nằm tại số 226 Cầu Cốc, phường Tây Mỗ, quận Nam Từ Liêm, Hà Nội. Dự án nằm liền phân khu Ruby của Vinhomes Smart City và khu căn hộ Imperia Smart City do MIK Group phát triểnKhu vực trung tâm kinh tế – văn hoá – giao thương quan trọng phía Tây Thủ đô, nơi có cơ sở hạ tầng, giao thông linh hoạt với định hướng trở thành một khu đô thị hạt nhân mới hàng đầu của thành phố.',
      },
      {
        id: 'e3460b89-06b9-42a1-885e-7f3cb9fe9695',
        title: 'Hateco Laroma',
        address: 'Đống Đa, Hà Nội',
        city: 'hanoi',
        area: '70',
        price: {
          from: '5.5',
          to: '10',
        },
        avatar: 'assets/1636966962-1635257661-hateco-laroma-background.png',
        images: [
          'assets/1636966962-1635257661-hateco-laroma-background (1).png',
          'assets/1635257662-tong-quan-hateco-laroma-2.png',
        ],
        type: {
          name: 'Chung cư',
          value: 'chungcu',
        },
        description:
          'Hateco Laroma là tổ hợp dự án văn phòng, trung tâm thương mại và căn hộ 5 sao toạ lạc tại vị trí đắc địa trung tâm của quận Đống Đa. Mang phong cách kiến trúc Tân cổ điển được đầu tư tâm huyết bởi chủ đầu tư Hateco, tạo điểm nhấn trong từng đường nét kiến trúc Italia tạo nên sức hút với giới thượng lưu.',
      },
      {
        id: '53a0a6de-09b8-45ae-af05-7d20f1c8a2ee',
        title: 'Trinity Tower',
        address: 'Thanh Xuân, Hà Nội',
        city: 'hanoi',
        area: '120',
        price: {
          from: '1.2',
          to: '4.1',
        },
        avatar: 'assets/1613985209-tong-quan-co-duong.jpg',
        images: [
          'assets/1613985209-tong-quan-co-duong (1).jpg',
          'assets/1613985408-phoi-canh-tong-the.jpg',
        ],
        type: {
          name: 'Chung cư',
          value: 'chungcu',
        },
        description:
          'Dự án Trinity Tower có vị trí đắc địa tại Số 145, Đường Hồ Mễ Trì, phường Nhân Chính, thuộc quận Thanh Xuân, thành phố Hà Nội. Dự án nằm liền kề Vinhomes Green Bay, nơi có hệ thống giao thông phát triển. Dự án nắm trong tay hạ tầng giao thông hoàn hảo, kết nối với nhiều tuyến đường lớn như đại lộ Thăng Long, Lương Thế Vinh, Khuất Duy Tiến, Phạm Hùng, Trần Duy Hưng… Với hệ thống hạ tầng hoàn chỉnh, dễ dàng kết nối tới các tiện tích công cộng như. Trường học, bệnh viện, công viên, bến xe, sân vận động,… chỉ trong vài phút lái xe.',
      },
      {
        id: '9b5e9c0f-6bf6-4e20-9d9a-807da44949d5',
        title: 'Chung cư Bình Minh Garden',
        address: 'Long Biên, Hà Nội',
        city: 'hanoi',
        area: '120',
        price: {
          from: '2.3',
          to: '3',
        },
        avatar: 'assets/1589335835-vphoto--6.jpg',
        images: [
          'assets/1613985209-tong-quan-co-duong (1).jpg',
          'assets/1613985408-phoi-canh-tong-the.jpg',
        ],
        type: {
          name: 'Chung cư',
          value: 'chungcu',
        },
        description:
          'Excepteur do et eiusmod sunt quis aliqua aute laboris veniam elit reprehenderit qui reprehenderit anim. Ipsum officia irure est non dolore veniam. Adipisicing excepteur est nostrud aute exercitation aute anim.',
      },
      {
        id: '999f57c1-44b7-4a25-a0ec-b29928ea9884',
        title: 'Product Branding Facilitator',
        address: 'Robertaberg, Indiana',
        city: 'danang',
        area: '20',
        price: {
          from: '1',
          to: '2.3',
        },
        avatar:
          'assets/1636969076-1635157837-200602mik-tmdmf4cam-tt-park-1.png',
        images: [
          'assets/1636969076-1635157837-200602mik-tmdmf4cam-tt-park-1 (1).png',
          'assets/1635157824-200530miktmdmf4bird-view03.jpg',
        ],
        type: {
          name: 'Chung cư',
          value: 'chungcu',
        },
        description:
          'Aute aute ad dolor nisi do Lorem voluptate irure reprehenderit. Ad aliquip laborum duis mollit ut et occaecat sint. Aliqua cupidatat eiusmod et tempor consectetur incididunt ullamco veniam id culpa aute nulla.',
      },
      {
        id: '26ae8c23-03d2-4249-a033-dd7dc4e81f17',
        title: 'Senior Intranet Technician',
        address: 'North Harley, Tennessee',
        city: 'hochiminh',
        area: '70',
        price: {
          from: '1.7',
          to: '2.9',
        },
        avatar:
          'assets/1636962467-1635220839-phoi-canh-vinhomes-smart-city.png',
        images: [
          'assets/1636962467-1635220839-phoi-canh-vinhomes-smart-city (1).png',
          'assets/1635220835-3-khai-truong-cong-vien-trung-tam-1024x576.png',
        ],
        type: {
          name: 'Chung cư',
          value: 'chungcu',
        },
        description:
          'Dolore adipisicing Lorem anim Lorem elit esse ullamco veniam et qui adipisicing ea exercitation. Velit ut fugiat esse consequat ut. Deserunt ullamco cupidatat sit ipsum enim reprehenderit. Excepteur incididunt culpa mollit officia incididunt Lorem. Adipisicing consectetur incididunt do ad sint commodo qui anim dolor.',
      },
      {
        id: '6cb93c17-c29a-4a2c-815c-e1d2d9b4d05d',
        title: 'Internal Brand Facilitator',
        address: "O'Konton, Tennessee",
        city: 'hanoi',
        area: '20',
        price: {
          from: '1',
          to: '2.3',
        },
        avatar:
          'assets/1636969076-1635157837-200602mik-tmdmf4cam-tt-park-1.png',
        images: [
          'assets/1636969076-1635157837-200602mik-tmdmf4cam-tt-park-1 (1).png',
          'assets/1635157824-200530miktmdmf4bird-view03.jpg',
        ],
        type: {
          name: 'Condotel',
          value: 'condotel',
        },
        description:
          'Aliqua aliqua sint nulla ea tempor magna Lorem ut commodo consequat ut dolor ex consequat. Qui eu nisi laborum exercitation occaecat ipsum cupidatat consectetur elit sunt qui culpa in. Sit irure pariatur eu sunt incididunt ut tempor velit culpa eu.',
      },
      {
        id: '1309343c-2934-4646-ae80-6f2dc4518b73',
        title: 'Customer Mobility Developer',
        address: 'Casper, South Dakotaeserunt.',
        city: 'danang',
        area: '70',
        price: {
          from: '1.7',
          to: '2.9',
        },
        avatar:
          'assets/1636962467-1635220839-phoi-canh-vinhomes-smart-city.png',
        images: [
          'assets/1636962467-1635220839-phoi-canh-vinhomes-smart-city (1).png',
          'assets/1635220835-3-khai-truong-cong-vien-trung-tam-1024x576.png',
        ],
        type: {
          name: 'Condotel',
          value: 'condotel',
        },
        description:
          'Magna in consequat eu dolor qui. Sunt cupidatat incididunt et fugiat. Veniam labore non ex adipisicing id ut ut quis in. Do id enim eu aute labore sint duis aute ipsum aliqua tempor nisi est. Ad quis eiusmod veniam quis.',
      },
      {
        id: 'f52c84eb-bb5a-4198-beb4-c88e46e9b011',
        title: 'Direct Functionality Executive',
        address: 'Esperanzaberg, Massachusetts',
        city: 'hanoi',
        area: '20',
        price: {
          from: '1',
          to: '2.3',
        },
        avatar:
          'assets/1636969076-1635157837-200602mik-tmdmf4cam-tt-park-1.png',
        images: [
          'assets/1636969076-1635157837-200602mik-tmdmf4cam-tt-park-1 (1).png',
          'assets/1635157824-200530miktmdmf4bird-view03.jpg',
        ],
        type: {
          name: 'Shophouse',
          value: 'shophouse',
        },
        description:
          'Commodo ullamco nisi eiusmod exercitation elit fugiat nulla in irure veniam ut eiusmod. Fugiat labore consequat qui elit sint labore adipisicing consequat incididunt ad eiusmod. Dolore exercitation aliquip aliqua magna ullamco adipisicing ex incididunt veniam non tempor aliquip laborum reprehenderit. Laboris occaecat sint reprehenderit eiusmod eiusmod reprehenderit sint eu. Nostrud aliquip occaecat qui proident tempor labore et commodo cillum consequat id. Eiusmod consectetur consectetur irure ad in fugiat culpa ut. Nisi enim proident dolor quis laborum qui ullamco irure nulla fugiat et enim Lorem excepteur.',
      },
      {
        id: 'd1eef864-1e86-4ef2-8a58-ba01a8352dee',
        title: 'Customer Factors Strategist',
        address: 'Wehnerport, Arizona',
        city: 'danang',
        area: '70',
        price: {
          from: '1.7',
          to: '2.9',
        },
        avatar:
          'assets/1636962467-1635220839-phoi-canh-vinhomes-smart-city.png',
        images: [
          'assets/1636962467-1635220839-phoi-canh-vinhomes-smart-city (1).png',
          'assets/1635220835-3-khai-truong-cong-vien-trung-tam-1024x576.png',
        ],
        type: {
          name: 'Shophouse',
          value: 'shophouse',
        },
        description:
          'Dolor ipsum pariatur dolor ex id sint commodo Lorem eiusmod aute cillum. Aliquip id in dolore culpa velit dolore aliquip mollit laborum consectetur non. Culpa esse nisi consequat quis nostrud. Veniam ullamco aute aute exercitation sunt cillum consequat eu dolor. Veniam excepteur excepteur qui pariatur. Mollit laborum amet et est eiusmod labore reprehenderit ea culpa adipisicing incididunt veniam.',
      },
    ],
    project: [
      {
        id: 'a92ff2d6-2377-441d-b75e',
        title: 'Masteri West Heights',
        address: 'Ngũ Hành Sơn, Đà Nẵng',
        city: 'danang',
        area: '40',
        date: '30 - 10 - 2022',
        price: {
          from: '1.67',
          to: '7.2',
        },
        avatar: 'assets/house-g5609a27a3_640.jpg',
        images: [
          'assets/istockphoto-1204970654-1024x1024.jpg',
          'assets/istockphoto-1264798472-1024x1024.jpg',
        ],
        type: {
          name: 'Chung cư',
          value: 'chungcu',
        },
        description:
          'Dự án Masteri West Heights toạ lạc tại vị trí “vàng” đẹp nhất trong quần thể đại đô thị Vinhomes Smart City, thuộc phường Tây Mỗ và Đại Mỗ, quận Nam Từ Liêm, Hà Nội. Nhà mẫu dự án nằm tại số 226 Cầu Cốc, phường Tây Mỗ, quận Nam Từ Liêm, Hà Nội. Dự án nằm liền phân khu Ruby của Vinhomes Smart City và khu căn hộ Imperia Smart City do MIK Group phát triểnKhu vực trung tâm kinh tế – văn hoá – giao thương quan trọng phía Tây Thủ đô, nơi có cơ sở hạ tầng, giao thông linh hoạt với định hướng trở thành một khu đô thị hạt nhân mới hàng đầu của thành phố.',
        des: 'Được phát triển bởi Sunshine Homes trực thuộc Sunshine Group, dự án Sunshine Metaland Đà Nẵng có quy mô 21ha',
      },
      {
        id: 'e3460b89-06b9-42a1-885e',
        title: 'Hateco Laroma',
        address: 'Đống Đa, Hà Nội',
        city: 'hanoi',
        area: '70',
        date: '02 - 11 - 2022',
        price: {
          from: '5.5',
          to: '10',
        },
        avatar: 'assets/house-gd24eb4bbd_640.jpg',
        images: [
          'assets/wall-416060.jpg',
          'assets/1635257662-tong-quan-hateco-laroma-2.png',
        ],
        type: {
          name: 'Chung cư',
          value: 'chungcu',
        },
        description:
          'Hateco Laroma là tổ hợp dự án văn phòng, trung tâm thương mại và căn hộ 5 sao toạ lạc tại vị trí đắc địa trung tâm của quận Đống Đa. Mang phong cách kiến trúc Tân cổ điển được đầu tư tâm huyết bởi chủ đầu tư Hateco, tạo điểm nhấn trong từng đường nét kiến trúc Italia tạo nên sức hút với giới thượng lưu.',
        des: 'Tổ hợp thương mại dịch vụ và căn hộ chung cư cao cấp thuộc dự án The Melody Ciputra, nằm trong Khu đô thị Ciputra Tây Hồ, Hà Nội.',
      },
      {
        id: '53a0a6de-09b8-45ae-af05',
        title: 'Trinity Tower',
        address: 'Bình Tân, Thành phố HCM',
        city: 'hcm',
        area: '120',
        date: '11 - 11 - 2022',
        price: {
          from: '1.2',
          to: '4.1',
        },
        avatar: 'assets/large-home-g286865b59_640.jpg',
        images: [
          'assets/living-room-gba4e289e0_1920.jpg',
          'assets/home-1622401_1920.jpg',
        ],
        type: {
          name: 'Chung cư',
          value: 'chungcu',
        },
        description:
          'Dự án Trinity Tower có vị trí đắc địa tại Số 145, Đường Hồ Mễ Trì, phường Nhân Chính, thuộc quận Thanh Xuân, thành phố Hà Nội. Dự án nằm liền kề Vinhomes Green Bay, nơi có hệ thống giao thông phát triển. Dự án nắm trong tay hạ tầng giao thông hoàn hảo, kết nối với nhiều tuyến đường lớn như đại lộ Thăng Long, Lương Thế Vinh, Khuất Duy Tiến, Phạm Hùng, Trần Duy Hưng… Với hệ thống hạ tầng hoàn chỉnh, dễ dàng kết nối tới các tiện tích công cộng như. Trường học, bệnh viện, công viên, bến xe, sân vận động,… chỉ trong vài phút lái xe.',
        des: 'Dự án gồm khu công viên Mũi Đèn Đỏ và nhà ở đô thị, với các khu căn hộ, tòa nhà văn phòng cùng hệ thống tiện ích đa dạng, cao cấp. ',
      },
      {
        id: '1309343c-2934-4646-ae80',
        title: 'Customer Mobility Developer',
        address: 'Casper, South Dakotaeserunt.',
        city: 'danang',
        area: '70',
        date: '13 - 10 - 2022',
        price: {
          from: '1.7',
          to: '2.9',
        },
        avatar: 'assets/berlin-7151205_1920.jpg',
        images: [
          'assets/bedroom-389254_1280.jpg',
          'assets/1635220835-3-khai-truong-cong-vien-trung-tam-1024x576.png',
        ],
        type: {
          name: 'Condotel',
          value: 'condotel',
        },
        description:
          'Magna in consequat eu dolor qui. Sunt cupidatat incididunt et fugiat. Veniam labore non ex adipisicing id ut ut quis in. Do id enim eu aute labore sint duis aute ipsum aliqua tempor nisi est. Ad quis eiusmod veniam quis.',
        des: 'Là dự án biệt thự đảo đầu tiên của chủ đầu tư Sun Group tại thị trường Đà Nẵng. Dự án Sunneva Island Đà Nẵng có quy mô 26ha',
      },
      {
        id: 'f52c84eb-bb5a-4198-beb4',
        title: 'Direct Functionality Executive',
        address: 'Esperanzaberg, Massachusetts',
        city: 'danang',
        area: '20',
        date: '30 - 12 - 2022',
        price: {
          from: '1',
          to: '2.3',
        },
        avatar:
          'assets/1636969076-1635157837-200602mik-tmdmf4cam-tt-park-1.png',
        images: [
          'assets/chairs-2181947_1920.jpg',
          'assets/1635157824-200530miktmdmf4bird-view03.jpg',
        ],
        type: {
          name: 'Shophouse',
          value: 'shophouse',
        },
        description:
          'Commodo ullamco nisi eiusmod exercitation elit fugiat nulla in irure veniam ut eiusmod. Fugiat labore consequat qui elit sint labore adipisicing consequat incididunt ad eiusmod. Dolore exercitation aliquip aliqua magna ullamco adipisicing ex incididunt veniam non tempor aliquip laborum reprehenderit. Laboris occaecat sint reprehenderit eiusmod eiusmod reprehenderit sint eu. Nostrud aliquip occaecat qui proident tempor labore et commodo cillum consequat id. Eiusmod consectetur consectetur irure ad in fugiat culpa ut. Nisi enim proident dolor quis laborum qui ullamco irure nulla fugiat et enim Lorem excepteur.',
        des: 'Cung ứng cho thị trường khoảng 3358 căn hộ và shophouse, chiếm một phần ba nguồn cung nhà ở xã hội của Đà Nẵng đến năm 2025.',
      },
      {
        id: 'd1eef864-1e86-4ef2-8a58-ba01a8352dee',
        title: 'Customer Factors Strategist',
        address: 'Wehnerport, Arizona',
        city: 'danang',
        area: '70',
        date: '08 - 12 - 2022',
        price: {
          from: '1.7',
          to: '2.9',
        },
        avatar:
          'assets/1636962467-1635220839-phoi-canh-vinhomes-smart-city.png',
        images: [
          'assets/stairs-4927569_1920.jpg',
          'assets/1635220835-3-khai-truong-cong-vien-trung-tam-1024x576.png',
        ],
        type: {
          name: 'Shophouse',
          value: 'shophouse',
        },
        description:
          'Dolor ipsum pariatur dolor ex id sint commodo Lorem eiusmod aute cillum. Aliquip id in dolore culpa velit dolore aliquip mollit laborum consectetur non. Culpa esse nisi consequat quis nostrud. Veniam ullamco aute aute exercitation sunt cillum consequat eu dolor. Veniam excepteur excepteur qui pariatur. Mollit laborum amet et est eiusmod labore reprehenderit ea culpa adipisicing incididunt veniam.',
        des: 'Là khu biệt thự nghỉ dưỡng được quy hoạch tại đường Trường Sa, phường Hoà Hải, quận Ngũ Hành Sơn, Đà Nẵng. ',
      },
    ],
  });
}
