import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'http://odysseus.culture.gr/h/4/eh41.jsp?obj_id=10321'
exb_nums = 1
titles_selector = "body > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(2) > b > font"
dates_selector = "#BODY > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td:nth-child(4) > table > tbody > tr > td:nth-child(2) > div > div" # permanent
thumbnails_selector = "body > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > a > img"
details_links_selector = "#BODY > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td.textMEnormal > div"
details_content_selector = ""

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )