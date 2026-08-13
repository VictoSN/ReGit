function FooterLinks() {
    return (
        <div className='flex flex-col pl-5 gap-2'>
            <div className='flex flex-row gap-2'>
                <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" target="_blank" rel="noopener noreferrer" className='text-xs text-[#8ba2ad] hover:underline'>GitHub Terms</a>
                <a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className='text-xs text-[#8ba2ad] hover:underline'>Privacy Policy</a>
                <a href="https://github.com/security" target="_blank" rel="noopener noreferrer" className='text-xs text-[#8ba2ad] hover:underline'>Security</a>
            </div>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='text-xs text-[#8ba2ad] hover:underline'>GitHub, Inc. © 2026. All rights reserved.</a>
        </div>
    )
}

export default FooterLinks