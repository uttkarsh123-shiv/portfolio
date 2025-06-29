import Header from "./components/Header";

const techStack = [
  {
    type: 'video/mp4',
    title: 'Web Development',
    videoSrc: 'https://res.cloudinary.com/df134toxg/video/upload/v1748012007/0080001-0050_v9xugw.mp4',
    bgColor: '#ffe92f',
    textColor: '#000000',
    icon: (
      <svg width="105" height="120" viewBox="0 0 305 336" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="235" width="70" height="112" rx="35" fill="black"/>
<rect x="235" y="112" width="70" height="112" rx="35" fill="black"/>
<rect x="235" y="224" width="70" height="112" rx="35" fill="black"/>
<rect width="70" height="112" rx="35" fill="black"/>
<rect y="112" width="70" height="112" rx="35" fill="black"/>
<rect x="120" y="119" width="71" height="112" rx="35.5" fill="black"/>
<rect y="224" width="70" height="112" rx="35" fill="black"/>
<rect y="224" width="70" height="112" rx="35" fill="black"/>
<rect x="63" y="176" width="70" height="112" rx="35" fill="black"/>
<rect x="176" y="182" width="70" height="113" rx="35" fill="black"/>
</svg>

    )
  },
    {
    type: 'video/mp4',
    title: 'Data Structure & Algorithms',
    videoSrc: 'https://res.cloudinary.com/df134toxg/video/upload/v1748012007/0110001-0050_c1wud3.mp4',
    bgColor: '#231f20',
    textColor: '#ffffff',
    icon:(
            <svg  width="80" height="120" viewBox="0 0 233 360" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="40.495" y="62.009" width="70" height="112" rx="35" transform="rotate(-61 40.495 62.009)" fill="white"/>
<path d="M139.543 119.761C132.616 101.715 141.629 81.4701 159.675 74.5429V74.5429C177.721 67.6156 197.966 76.6292 204.894 94.6753L219.945 133.886C226.872 151.932 217.859 172.177 199.813 179.104V179.104C181.766 186.031 161.522 177.018 154.594 158.971L139.543 119.761Z" fill="white"/>
<path d="M113.075 258.075C128.909 246.988 150.733 250.836 161.82 266.67V266.67C172.907 282.505 169.059 304.329 153.225 315.416L118.821 339.506C102.987 350.593 81.1624 346.745 70.0752 330.911V330.911C58.988 315.077 62.8361 293.253 78.6703 282.165L113.075 258.075Z" fill="white"/>
<path d="M154.045 203.569C157.069 184.477 174.998 171.451 194.09 174.475V174.475C213.182 177.499 226.208 195.428 223.184 214.52L216.613 256.002C213.59 275.094 195.661 288.12 176.569 285.096V285.096C157.477 282.072 144.451 264.144 147.475 245.052L154.045 203.569Z" fill="white"/>
<rect y="11.0001" width="70" height="112" rx="35" fill="white"/>
<rect y="123" width="70" height="112" rx="35" fill="white"/>
<rect y="235" width="70" height="112" rx="35" fill="white"/>
</svg>
    )
  },
  {
    type: 'video/mp4',
    title: 'Database Management System',
    videoSrc: 'https://res.cloudinary.com/df134toxg/video/upload/v1748012008/0100001-0050_tqhslr.mp4',
    bgColor: '#eadcab',
    textColor: '#2b2b2b',
    icon:(
      <svg  width="80" height="120" viewBox="0 0 233 360" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="40.495" y="62.009" width="70" height="112" rx="35" transform="rotate(-61 40.495 62.009)" fill="black"/>
<path d="M139.543 119.761C132.616 101.715 141.629 81.4701 159.675 74.5429V74.5429C177.721 67.6156 197.966 76.6292 204.894 94.6753L219.945 133.886C226.872 151.932 217.859 172.177 199.813 179.104V179.104C181.766 186.031 161.522 177.018 154.594 158.971L139.543 119.761Z" fill="black"/>
<path d="M113.075 258.075C128.909 246.988 150.733 250.836 161.82 266.67V266.67C172.907 282.505 169.059 304.329 153.225 315.416L118.821 339.506C102.987 350.593 81.1624 346.745 70.0752 330.911V330.911C58.988 315.077 62.8361 293.253 78.6703 282.165L113.075 258.075Z" fill="black"/>
<path d="M154.045 203.569C157.069 184.477 174.998 171.451 194.09 174.475V174.475C213.182 177.499 226.208 195.428 223.184 214.52L216.613 256.002C213.59 275.094 195.661 288.12 176.569 285.096V285.096C157.477 282.072 144.451 264.144 147.475 245.052L154.045 203.569Z" fill="black"/>
<rect y="11.0001" width="70" height="112" rx="35" fill="black"/>
<rect y="123" width="70" height="112" rx="35" fill="black"/>
<rect y="235" width="70" height="112" rx="35" fill="black"/>
</svg>

    )
  },
  {
    type: 'video/mp4',
    title: 'UI & UX Design',
    videoSrc: 'https://res.cloudinary.com/df134toxg/video/upload/v1748012007/0090001-0050_wjaktk.mp4',
    bgColor: '#ff4500',
    textColor: '#ffffff',
    icon:(
      <svg width="105" height="120" viewBox="0 0 305 331" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="235" width="70" height="112" rx="35" fill="white"/>
<rect x="235" y="109" width="70" height="112" rx="35" fill="white"/>
<rect x="235" y="219" width="70" height="112" rx="35" fill="white"/>
<rect y="2" width="70" height="112" rx="35" fill="white"/>
<rect y="111" width="70" height="112" rx="35" fill="white"/>
<rect y="219" width="70" height="112" rx="35" fill="white"/>
<rect x="153" y="261" width="70" height="83" rx="35" transform="rotate(90 153 261)" fill="white"/>
<rect x="236" y="261" width="70" height="83" rx="35" transform="rotate(90 236 261)" fill="white"/>
</svg>

    )
  },
    {
    type: 'video/mp4',
    title: 'Version Control System',
    videoSrc: 'https://res.cloudinary.com/df134toxg/video/upload/v1748012007/0120001-0050_eauksh.mp4',
    bgColor: '#ffc7b2',
    textColor: '#1e1e1e',
    icon:(
      <svg width="105" height="120" viewBox="0 0 323 334" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="255.526" y="0.729004" width="70" height="112" rx="35" transform="rotate(18 255.526 0.729004)" fill="black"/>
<rect x="216.299" y="106.326" width="70" height="112" rx="35" transform="rotate(16 216.299 106.326)" fill="black"/>
<rect x="179.095" y="208" width="70" height="112" rx="35" transform="rotate(14 179.095 208)" fill="black"/>
<rect x="0.408081" y="22.5563" width="70" height="112" rx="35" transform="rotate(-18 0.408081 22.5563)" fill="black"/>
<rect x="36.4281" y="123.62" width="70" height="112" rx="35" transform="rotate(-16 36.4281 123.62)" fill="black"/>
<rect x="72" y="224.934" width="70" height="112" rx="35" transform="rotate(-14 72 224.934)" fill="black"/>
</svg>

    )
  },
    {
    title: 'Performance Optimization',
    bgColor: '#f9d67a',
    textColor: '#1e1e1e',
    icon:(
<svg width="105" height="120" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="49" y="62.9156" width="70" height="112" rx="35" transform="rotate(-64 49 62.9156)" fill="black"/>
<path d="M122 106C122 86.67 137.67 71 157 71V71C176.33 71 192 86.67 192 106V148C192 167.33 176.33 183 157 183V183C137.67 183 122 167.33 122 148V106Z" fill="black"/>
<rect x="141.873" y="137.902" width="70" height="112" rx="35" transform="rotate(67 141.873 137.902)" fill="black"/>
<rect y="7" width="70" height="112" rx="35" fill="black"/>
<rect y="116" width="70" height="112" rx="35" fill="black"/>
<rect y="224" width="70" height="112" rx="35" fill="black"/>
</svg>

    )
  },

];

const CoreSection = ({id}) => {
 return (
  <div id={id} className="w-full h-[350vh] p-10  pt-60 flex flex-col gap-10">
    <Header as="h1" className="sm:text-[30px] text-center">
      {'{ Core Skills }'}
    </Header>

     <div className="flex flex-wrap  gap-6 p-4">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="w-full max-w-[690px] min-h-[600px] rounded-[60px] p-6 pt-10 pl-10 pb-10  flex flex-col justify-between  transition-transform duration-300 hover:scale-105"
          style={{ backgroundColor: tech.bgColor, color: tech.textColor }}
        >
          {tech.icon}
          <h1 className="text-4xl font-normal">{tech.title}</h1>
        </div>
      ))}
    </div>
  </div>
 )
};

export default CoreSection;
