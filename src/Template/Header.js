function Header() {
    return (
        <div className="container mx-auto my-3.5 px-3">
            <div className={"flex justify-between items-end"}>
                <h1 className={"text-4xl font-medium"}>Template Generator</h1>
                <img alt="JaCoW Logo" className={"hidden md:inline-block h-[50px]"} src={"jacow_image.png"} border="0"/>
            </div>
        </div>
    )
}

export default Header;