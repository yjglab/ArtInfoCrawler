import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://hk.science.museum/en_US/web/scm/exhibition.html'
exb_nums = 1
titles_selector = ".section_center_content:nth-of-type(1) .title"
dates_selector = ".section_center_content:nth-of-type(1) .date"
thumbnails_selector = ".section_center_content:nth-of-type(1) .bg"
details_links_selector = ".section_center_content:nth-of-type(1) .a_block"
details_content_selector = ".detail_text .description"
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