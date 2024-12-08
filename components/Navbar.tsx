export const Navbar = () => {
    return (
        <>
            <nav>
                <div className="flex justify-between items-center mx-[28px] mt-[26px]">
                    <img src="/nav-search-icon.svg" alt="Image failed" />
                    <p className="text-[24px] leading-[29px]">Avion</p>
                    <div className="flex gap-x-4">
                        <img src="/nav-cart-icon.svg" alt="Image-failed" />
                        <img src="/nav-user-icon.svg" alt="Image-failed" />
                    </div>
                </div>
            </nav>
        </>
    )
}