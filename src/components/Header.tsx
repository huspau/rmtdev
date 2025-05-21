import Logo from "./Logo.tsx";
import BookmarksButton from "./BookmarksButton.tsx";
import SearchForm from "./SearchForm.tsx";

export default function Header({searchText, setSearchText}) {
  return (
    <header className="header">
      <div className="header__top">
          <Logo />
          <BookmarksButton />
      </div>
        <SearchForm searchText={searchText} setSearchText={setSearchText}/>
    </header>
  );
}
