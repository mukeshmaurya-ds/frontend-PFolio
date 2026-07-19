type Props={
title:string;
subtitle:string;
}

export default function SectionHeading({

title,

subtitle

}:Props){

return(

<div className="mb-20 text-center">

<p
className="
mb-4
font-semibold
uppercase
tracking-[6px]
text-cyan-400
"
>

{subtitle}

</p>

<h2
className="
gradient-text
text-5xl
font-black
md:text-6xl
"
>

{title}

</h2>

<div
className="
mx-auto
mt-6
h-1
w-24
rounded-full
bg-cyan-500
"
/>

</div>

)

}