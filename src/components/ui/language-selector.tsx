import { useLocale } from "@/lib/hooks";
import { autoUpdate, flip, FloatingFocusManager, FloatingPortal, offset, size, useClick, useDismiss, useFloating, useInteractions, useListNavigation, useRole, useTypeahead } from "@floating-ui/react";
import { useRef, useState } from "react";


export default function LanguageSelector() {
    const languages = [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
        { value: 'fr', label: 'Français' },
    ];


    const [locale, setLocale] = useLocale();

    const [isOpen, setIsOpen] = useState(false);

    const [activeIndex, setActiveIndex] = useState<number | null>(
      languages.findIndex((lang) => lang.value === locale)
    );
    const [selectedIndex, setSelectedIndex] = useState<number | null>(
      languages.findIndex((lang) => lang.value === locale)
    );


    const { refs, floatingStyles, context } = useFloating<HTMLElement>({
      placement: "bottom-end",
      open: isOpen,
      onOpenChange: setIsOpen,
      whileElementsMounted: autoUpdate,
      middleware: [
        offset(5),
        flip({ padding: 10 }),
        size({
          apply({ rects, elements, availableHeight }) {
            Object.assign(elements.floating.style, {
              maxHeight: `${availableHeight}px`,
              minWidth: `${rects.reference.width}px`,
            });
          },
          padding: 10,
        }),
      ],
    });

    const listRef = useRef<Array<HTMLElement | null>>([]);

    const listContentRef = useRef(languages.map((lang) => lang.label));

    const isTypingRef = useRef(false);

    const click = useClick(context, { event: "mousedown" });

    const dismiss = useDismiss(context);

    const role = useRole(context, {role: "listbox"});

    const listNavigation = useListNavigation(context, {
      listRef,
      activeIndex,
      selectedIndex,
      onNavigate:setActiveIndex,
    });


    const typeAhead = useTypeahead(context, {
      listRef: listContentRef,
      activeIndex,
      selectedIndex,
      onMatch: isOpen ? setActiveIndex : setSelectedIndex,
      onTypingChange: (isTyping) => {
        isTypingRef.current = isTyping;
      }
    });

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
      [click, dismiss, role, listNavigation, typeAhead]
    );

    const handleSelect = (index: number) => {
      setSelectedIndex(index);
      setLocale(languages[index].value);
      setIsOpen(false);
    }

    const selectedItemLabel = selectedIndex !== null ? languages[selectedIndex].label : undefined;
    
    return (
      <>
        <div
          ref={refs.setReference}
          className="text-sm font-bold text-foreground/60 cursor-pointer flex gap-2"
          {...getReferenceProps()}
        >
          {selectedItemLabel}
        </div>
        {isOpen && (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={false}>
              <div
                ref={refs.setFloating}
                style={{
                  ...floatingStyles,
                }}
                className="z-50 w-30 text-sm font-medium text-foreground/60 cursor-pointer outline-0 p-2 rounded-sm bg-background"
                {...getFloatingProps()}
              >
                {languages.map((language, index) => (
                  <div
                    key={language.value}
                    className="px-1 py-2 rounded-sm hover:bg-foreground/10"
                    {...getItemProps({
                      onClick() {
                        handleSelect(index);
                      },
                      onKeyDown(event) {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          handleSelect(index);
                        }
                        if (event.key === " " && !isTypingRef.current) {
                          event.preventDefault();
                          handleSelect(index);
                        }
                      },
                    })}
                  >
                    {language.label}
                  </div>
                ))}
              </div>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </>
    );
}