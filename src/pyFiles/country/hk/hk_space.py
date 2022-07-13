import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.lcsd.gov.hk/CE/Museum/Space/en_US/web/spm/exhibitions.html'
exb_nums = 1
titles_selector = "#text-block-permanent-exhibition .text-block-title"
dates_selector = "meta"
thumbnails_selector = "#text-block-past-exhibitions > article > div > div > div.col-12.col-lg-6.order-lg-2.align-self-start > figure > div > img"
details_links_selector = "meta"
details_content_selector = "#text-block-permanent-exhibition .text-block-content"
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