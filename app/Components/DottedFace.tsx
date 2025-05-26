// Using video element instead of Image

export default function DottedFace(props: any) {
    return (
    
        <div className="flex justify-center items-center">
           <video 
                src="/video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                width={350}
                height={350}
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
}