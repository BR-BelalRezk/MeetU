export default function Home() {
  return (
    <section className=" flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism">Upcoming Meeting at: 12:30 PM</h2>
        </div>
      </div>
    </section>
  );
}
