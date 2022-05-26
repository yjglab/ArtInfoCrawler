import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.rom.on.ca/en/exhibitions-galleries'
exb_nums = 3
titles_selector = ".views-field-title"
dates_selector = ".views-field-field-date-information"
thumbnails_selector = ".img-container img" # 0번째 제거필요
details_links_selector = ".views-field-title a"
details_content_selector = ".exhibition-section-content > .field"
category = "museum"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )