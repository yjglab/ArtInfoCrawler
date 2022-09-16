import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'http://www.secult.salvador.ba.gov.br/index.php/equipamentos/casa-do-rio-vermelho'
exb_nums = 1
titles_selector = ".page-header > h2"
dates_selector = "meta"
thumbnails_selector = "#texto-artigo > p img"
details_links_selector = "meta"
details_content_selector = "#texto-artigo"
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