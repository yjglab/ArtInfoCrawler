import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://palazzoducale.visitmuve.it/category/en/mostre-en/mostre-in-corso-en/'
exb_nums = 2
titles_selector = ".riga_mostra .text h2"
dates_selector = ".riga_mostra .text h3"
thumbnails_selector = ".riga_mostra .thumb"
details_links_selector = "meta"
details_content_selector = ".riga_mostra .text > p"
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