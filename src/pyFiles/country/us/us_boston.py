import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.mfa.org/exhibitions'
exb_nums = 11
titles_selector = ".h3"
dates_selector = ".info"
thumbnails_selector = ".img-responsive"
details_links_selector = ".h3 a"
details_content_selector = ".space-after-lg:nth-child(1)" # 별도처리 나중에
category = "museum"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    category,
    )