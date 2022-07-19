import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.boijmans.nl/en/depot/schedule'
exb_nums = 3
titles_selector = ".section-content-general__title"
dates_selector = ".section-content-general__content p:nth-of-type(1)"
thumbnails_selector = ".section-content-general__visual img"
details_links_selector = "meta"
details_content_selector = ".section-content-general__content p:nth-of-type(2)"
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